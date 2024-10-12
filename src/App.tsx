import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom";
import Router from '../src/router/Router';

import thema from './thema/thema'

export default function App() {
  return (
      <ChakraProvider theme={thema}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ChakraProvider>
  );
}
