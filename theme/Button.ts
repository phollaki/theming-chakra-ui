import { StyleFunctionProps, defineStyleConfig } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

const Button = defineStyleConfig({
  baseStyle: {
    rounded: 'full',
    p: 6
  },
  variants: {
    primary: {
      colorScheme: 'primary'
    },
    solid: (props: StyleFunctionProps) => ({
      bg: mode('primary.500', 'primary.200')(props),
      color: mode('white', 'gray.800')(props),
      _hover: {
        bg: mode("primary.400", 'primary.400')(props),
      },
    })
  },
  defaultProps: {
    variant: 'solid',
    colorScheme: 'primary',
  },
})

export default Button;