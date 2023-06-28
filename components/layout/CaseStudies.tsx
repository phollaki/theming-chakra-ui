import React from "react";
import { Card } from "../cards/Card";
import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CenteredSection } from "../sections/CenteredSection";
import Flex from "@/theme/Flex";

const caseStudies = [
  {
    id: 1,
    src: "https://benestudio.co/wp-content/uploads/2023/01/medicall_casestudy.png",
    title: "Connecting doctors and patients with Medicall’s telehealth service",
    highlight: "case study",
    description:
      "Connecting doctors and patients with Medicall’s telehealth service",
  },
  {
    id: 2,
    src: "https://benestudio.co/wp-content/uploads/2022/04/Header.png",
    title: "DynamiCare: Patient-centered UX design in a rehabilitation app",
    highlight: "case study",
    description:
      "Learn how we scaled up an MVP to a working app using adjustable team capacity.",
  },
  {
    id: 3,
    src: "https://benestudio.co/wp-content/uploads/2023/04/thumbnail-2.jpg",
    title: "AI perspectives in web-based HealthTech projects",
    highlight: "case study",
    description:
      "Learn about how can you use AI in your web-based HealthTech projects! We tested it in our healthcare app and collected our insights.",
  },
];

export const CaseStudies = () => {
  return (
    <Center maxW="1000px" mx="auto" my="24">
      <VStack spacing={10}>
        <CenteredSection>
          <Heading>Check out our recent case studies</Heading>
          <Text>
            Discover the success stories of our clients through our compelling
            case studies. Explore how our solutions have empowered businesses to
            achieve their goals and drive tangible results
          </Text>
        </CenteredSection>
        <Grid
          templateColumns={["1fr", "1fr", `repeat(${caseStudies.length}, 1fr)`]}
          templateRows={[`repeat(${caseStudies.length}, 1fr)`, `repeat(${caseStudies.length}, 1fr)`, '1fr']}
          w="full"
          gap={10}
        >
          {caseStudies.map((cs) => (
            <GridItem key={cs.id}>
              <Card {...cs} />
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Center>
  );
};
