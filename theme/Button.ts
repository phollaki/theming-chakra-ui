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
      bg: mode('primary.500', 'secondary.500')(props),
      color: mode('white', 'gray.800')(props),
      _hover: {
        bg: mode("primary.400", 'secondary.400')(props),
      },
    }),
    technology: (props: StyleFunctionProps) => ({
      mx: 2,
      my: 2,
      px: 10,
      py: 8,
      bg: 'transparent',
      border: '1px',
      borderColor: mode('gray.800', 'gray.200')(props),
      color: mode('gray.800', 'gray.200')(props),
      _hover: {
        bg: mode("primary.400", 'secondary.400')(props),
        color: mode("gray.800", "gray.800")
      },
    })
  },
  defaultProps: {
    variant: 'solid',
    colorScheme: 'primary',
  },
})

export default Button;