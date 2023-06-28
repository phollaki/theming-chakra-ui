import { StyleFunctionProps, defineStyleConfig } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

const Container = defineStyleConfig({
  baseStyle: {
    maxW:"100vw",
    paddingX:['5', '12', "24"],
    paddingY:"16"
  },
  variants: {
    primary: {

    },
    secondary: (props: StyleFunctionProps) => ({
      backgroundColor: mode('gray.50', 'gray.700')(props),
    })
  }
})


export default Container