import { extendTheme } from '@chakra-ui/react'
import Button from './Button'
import Text from './Text'
import { FlexStyles as Flex } from './Flex'
import { BoxStyles as Box } from './Box'
import { CenterStyles as Center } from './Center'
import Container from './Container'
import Heading from './Heading'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    secondary: {
      "50": "#eefcf9",
      "100": "#dcf9f3",
      "200": "#b9f4e7",
      "300": "#96eeda",
      "400": "#73e9ce",
      "500": "#50e3c2",
      "600": "#40b69b",
      "700": "#308874",
      "800": "#205b4e",
      "900": "#102d27"
    },
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
    Heading,
  }
})


export default theme;