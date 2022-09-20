import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import {Flex, Heading, Box, Stack, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button} from "@chakra-ui/react"

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleShowPassword = () => setShowPassword(!showPassword);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitted(true);
        if(isSubmitted) { //TODO check for authentication before navigation
            navigate('/calculator') 
        }
    }

    return (
        <Flex width='100vw' height='100vh' backgroundColor='gray.200' justify='center' align='center'>
            <Stack justify='center' align='center'>
                <Heading color='blue.600'>Welcome</Heading>
                <Box minW='350px'>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={4} p={8} backgroundColor='whitesmoke'>
                            <FormControl isRequired>
                            <FormLabel>Username</FormLabel>
                                <Input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input type={showPassword ? 'text' : 'password'} placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                                    <InputRightElement w={16}>
                                        <Button size="sm" onClick={handleShowPassword}>
                                            {showPassword ? 'Hide': 'Show'}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Button colorScheme='blue' disabled={!(username && password)} type='submit'>
                                Login
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Stack>
        </Flex>
    )
}