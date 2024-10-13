import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom";
import Router from '../src/router/Router';

import thema from './thema/thema'
import { LoginUserProvider } from './providers/LoginUserProvider';

export default function App() {
  return (
    <LoginUserProvider>
      <ChakraProvider theme={thema}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </LoginUserProvider>
  );
}
