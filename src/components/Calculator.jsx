import {Box, Stack, Button} from "@chakra-ui/react";
import { useState } from "react";
import Result from "./Result";

export default function Calculator() {
    const buttonValues = [
        ["C", "+-", "/"],
        [7, 8, 9, "X"],
        [4, 5, 6, "-"],
        [1, 2, 3, "+"],
        [0, ".", "="],
    ]
    let [calculator, setCalculator] = useState({
        sign: "",
        num: 0,
        res: 0,
        cost: 0
    })

    const handleClick = (name) => {
        switch(name) {
            case "C":
                return resetCalculator;
            case "+-":
                return invertNumber;
            case "/" || "X" || "-" || "+": 
                return signHandler;
            case "=": 
                return calculateHandler;
            default: 
                return numberHandler;
        }

    }

    const resetCalculator = () => {
        setCalculator({
            ...calculator,
            sign: "",
            num: 0,
            res: 0,
            cost: 0
        })
    }

    const invertNumber = () => {
        setCalculator({
            ...calculator,
            sign: "", 
            num: calculator.num ? toLocaleString(calculator.num * -1) : 0,
            res: calculator.res ? toLocaleString(calculator.res * -1) : 0,
            cost: 0
        })
    }

    const signHandler = (e) => {
        const name = e.target.innerHTML;
        //TODO fetch cost of calculations from back end and set cost below

        setCalculator({
            ...calculator, 
            sign: name,
            res: !calculator.res && calculator.num ? calculator.num : calculator.res,
            num: 0,
            cost: 0 
        })
    }

    const calculateHandler = () => {
        if(calculator.sign && calculator.num) {
            const calc = (a, b, sign) => {
                if(sign === "+") {
                    return a + b;
                } else if (sign === "-") {
                    return a - b;
                } else if (sign === "X") {
                    return a * b;
                } else if (sign === "/" && b === 0) {
                    return "Error: Can't divide by 0";
                } else if (sign === '/') {
                    return a / b;
                }
                else return 0;
            }

            setCalculator({
                ...calculator,
                sign: "",
                num: 0,
                res: toLocaleString(calc(Number(calculator.res), Number(calculator.num), calculator.sign)),
                cost: 0
            })
        }
    }

    const numberHandler = (e) => {
        const numValue = e.target.innerHTML;
        const calculateNum = calculator.num === 0 && numValue === "0" ? "0" : toLocaleString(Number(calculator.num + numValue))
        setCalculator({
            ...calculator,
            num: calculateNum,
            res: !calculator.sign ? 0 : calculator.res
        })
    }

    return (
        <Box>
            {
                buttonValues.flat().map((button, i) => {
                    return (
                        <Button key={i} className={button === "=" ? "equals" : ""} name={button} onClick={(e) => handleClick(e.target.name)}>{button}</Button>
                    )
                })
            }
                <Result />
        </Box>
    )
}