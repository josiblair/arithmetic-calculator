import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {ChakraProvider} from '@chakra-ui/react'
import './App.css';
import Login from './components/Login';
import Calculator from './components/Calculator';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route index element={<Login />} />
          <Route path='calculator' element={<Calculator />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
