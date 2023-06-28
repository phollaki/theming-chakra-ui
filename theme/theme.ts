import { extendTheme } from '@chakra-ui/react'
import Button from './Button'
import Text from './Text'
import { FlexStyles as Flex } from './Flex'
import { BoxStyles as Box } from './Box'
import { CenterStyles as Center } from './Center'
import Container from './Container'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    primary: {
      "50": "#ffecee",
      "100": "#ffd9dd",
      "200": "#ffb2bc",
      "300": "#fe8c9a",
      "400": "#fe6579",
      "500": "#fe3f57",
      "600": "#cb3246",
      "700": "#982634",
      "800": "#661923",
      "900": "#330d11"
    }
  },
  components: {
    Button,
    Flex,
    Box,
    Text,
    Center,
    Container,
    Heading: {
      baseStyle: {
        fontWeight: "900",
      }
    },
  }
})


export default theme;