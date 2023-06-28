import { Flex as ChakraFlex, defineStyleConfig, useStyleConfig } from '@chakra-ui/react'

export const FlexStyles = defineStyleConfig({
  baseStyle: {
    display: 'flex',
  },
  variants: {
    primary:{
      width: 'full',
      flexDirection: ['column-reverse', 'column-reverse', 'row'],
      justifyContent: 'center',
      alignItems: 'center',
      height: 'container.sm',
      textAlign: ['center', 'center', 'left']
    },
    centered: {
      width: 'full',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    },
    rowCenter: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    colCenter: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    colLeft:{
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'start'
    },
    rowSpaceBetween:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  },
  defaultProps: {

  }
})

const Flex = (props: any) => {
  const { variant, ...rest } = props

  const styles = useStyleConfig('Flex', { variant })

  // Pass the computed styles into the `__css` prop
  return <ChakraFlex __css={styles} {...rest} />
}


export default Flex