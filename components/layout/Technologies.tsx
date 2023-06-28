import React from 'react'
import { CenteredSection } from '../sections/CenteredSection'
import { Button, Flex, Heading, Text } from '@chakra-ui/react'

const technologyList = [
  'Java',
  '.Net',
  'Node.js',
  'Python',
  'Ruby',
  'AWS',
  'Azure'
]


export const Technologies = () => {
  return (
    <>
      <CenteredSection>
        <Heading>Reliable & cutting-edge technologies</Heading>
        <Text>We are here to maintain your legacy systems and improve them further with the latest technologies.</Text>
      </CenteredSection>
      <Flex justifyContent="center" flexWrap="wrap">
        {technologyList.map(tech=>(
          <Button key={tech} variant="technology">{tech}</Button>
        ))}
      </Flex>
    </>
  )
}
