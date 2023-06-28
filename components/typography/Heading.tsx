import { Text } from '@chakra-ui/react'
import React from 'react'

export interface ChildrenProps {
  children?: React.ReactNode;
}

export const Heading = ({children}: ChildrenProps) => {
  return (
    <Text variant="heading">{children}</Text>
  )
}
