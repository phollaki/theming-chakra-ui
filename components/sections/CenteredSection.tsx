import { Container, VStack } from "@chakra-ui/react";
import React from "react";
import { ChildrenProps } from "../typography/Heading";

interface CenteredSectionProps extends ChildrenProps {
  variant?: 'primary' | 'secondary'
}

export const CenteredSection = ({variant="primary", children}: CenteredSectionProps) => {
  return (
    <Container variant={variant}>
      <VStack spacing={5}>
        {children}
      </VStack>
    </Container>
  );
};
