import React from 'react'
import { CenteredSection } from '../sections/CenteredSection'
import { Heading, Text } from '@chakra-ui/react'

export const WhoWeAre = () => {
  return (
    <CenteredSection variant='secondary'>
      <Heading>We are your MedTech competency center</Heading>
        <Text textAlign="center">
          ​​With a focus on FDA, MDR, and ISO compliance, our global consultancy
          is here to support and improve your MedTech software projects. With
          the majority of our experts located in our EU offices, we can dedicate
          well-educated engineers to your projects at competitive prices for the
          long term. Our group serves as your MedTech software competency center
          for both team extension and managed projects, ranging from one
          dedicated expert to a team of 50. We cover your UX, UI, and brand
          design, systems & architecture design, cybersecurity, data, AI, cloud,
          IoT, mobile & web development, and quality assurance needs.
        </Text>
    </CenteredSection>
  )
}
