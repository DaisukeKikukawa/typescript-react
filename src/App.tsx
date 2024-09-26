import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, ChakraProvider } from '@chakra-ui/react'

export default function App() {

  return (
    <>
      <ChakraProvider>
        <Button colorScheme="teal">ボタン</Button>
      </ChakraProvider>
    </>
  )
}
