// グローバルなテーマを定義する
import { extendTheme } from "@chakra-ui/react";
import { style } from "framer-motion/client";

const thema = extendTheme({
 styles: {
    global: {
      body: {
        backgroundColor: "gray.100",
        color: "gray.800"
      },
    },
  },
});
export default thema;
