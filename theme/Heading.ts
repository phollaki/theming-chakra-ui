import { StyleFunctionProps, defineStyleConfig } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

const Heading = defineStyleConfig({
  baseStyle: (props: StyleFunctionProps) => ({
    fontWeight: "900",
    _hover: {
      color: mode("primary.500", "secondary.500")(props),
      cursor: "default"
    },
    transition:"ease-in-out",
    transitionDuration:"500ms",
  }),
},)

export default Heading;