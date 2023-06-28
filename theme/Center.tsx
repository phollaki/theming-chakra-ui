import { Center as ChakraCenter, defineStyleConfig, useStyleConfig } from '@chakra-ui/react'

export const CenterStyles = defineStyleConfig({
  baseStyle: {
  },
  variants: {
    centeredSection: {
    }
  },
  defaultProps: {

  }
})

const Center = (props: any) => {
  const { variant, ...rest } = props

  const styles = useStyleConfig('Center', { variant })

  // Pass the computed styles into the `__css` prop
  return <ChakraCenter __css={styles} {...rest} />
}


export default Center