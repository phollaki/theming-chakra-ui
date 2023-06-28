import React from 'react'
import { Section } from '../sections/Section'
import { Button, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

export const Banner = () => {
  return (
    <Section>
      <Stack my={[10, 10, 0]} spacing={5} maxW={500} >
        <Heading>Your MedTech Software Consultancy</Heading>
        <Text>From design and development to testing and documentation, we build end-to-end solutions for MedTech, corporate innovators, and startups.</Text>
        <Button variant="solid">Book a free consultation <ArrowForwardIcon/></Button>
      </Stack>
      <Image
        src="https://benestudio.co/wp-content/uploads/2020/11/BS_Home_Hero_2-2.png"
        alt="bene logo"
        width={[200, 300, 400, 600, 700]}
      />
    </Section>
  )
}
