import Flex from '@/theme/Flex'
import { Container } from '@chakra-ui/react'
import React from 'react'

export const Section = ({children}: {children: React.ReactNode}) => {
  return (
    <Container variant="primary">
      <Flex variant="primary">
        {children}
      </Flex>
    </Container>
  )
}
