import { StyleFunctionProps, defineStyleConfig } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

const Text = defineStyleConfig({
  baseStyle: (props: StyleFunctionProps) => ({
    _hover: {
      color: mode("primary.500", "secondary.500")(props),
      cursor: "default"
    },
    transition:"ease-in-out",
    transitionDuration:"500ms",
  }),
  variants: {
    heading: {
      fontSize: '3xl'
    },
    highlighted: (props: StyleFunctionProps) => ({
      textTransform: 'uppercase',
      color: mode('primary.500', 'secondary.500')(props),
      fontWeight: 'bold'
    })
  },
  defaultProps: {
  }
})

export default Text;