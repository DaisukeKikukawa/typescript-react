import './App.css'
import { Button, ChakraProvider } from '@chakra-ui/react'
import thema from './thema/thema'

export default function App() {

  return (
    <>
      <ChakraProvider theme={thema}>
        <Button colorScheme="teal">ボタン</Button>
        <p>テスト</p>
      </ChakraProvider>
    </>
  )
}
