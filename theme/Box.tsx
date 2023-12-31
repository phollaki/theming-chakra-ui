import { Box as ChakraBox, defineStyleConfig, useStyleConfig } from '@chakra-ui/react'

export const BoxStyles = defineStyleConfig({
  baseStyle: {
  },
  variants: {
    main: {
      margin: 'auto',
      maxW:'1700px',
    },
    nav: {
      height:'full',
      borderColor:"gray.100",
      width:"full",
      maxW: '1600px',
      margin: 'auto',
      px: 5,
      py: 1,
      boxShadow: 'md'
    }
  },
  defaultProps:{
  }
})

const Box = (props: any) => {
  const { variant, ...rest } = props

  const styles = useStyleConfig('Box', { variant })

  // Pass the computed styles into the `__css` prop
  return <ChakraBox __css={styles} {...rest} />
}

export default Box