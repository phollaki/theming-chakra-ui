import { defineStyleConfig } from "@chakra-ui/react";

const Text = defineStyleConfig({
  baseStyle: {
    _hover:{
      color: "primary.500",
      cursor: "default"
    },
    transition:"ease-in-out",
    transitionDuration:"500ms",
  },
  variants: {
    heading: {
      fontSize: '3xl'
    }
  },
  defaultProps:{
  }
})

export default Text;