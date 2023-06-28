import { Image, Text, Card as ChakraCard, Stack } from "@chakra-ui/react";
import React from "react";

interface CardProps {
  src: string;
  highlight: string;
  title: string;
  description: string;
}

export const Card = ({ src, title, highlight, description }: CardProps) => {
  return (
    <ChakraCard h={['2xl', '2xl','md']} rounded="md" overflow="hidden" shadow="xl" py={10} px={4}>
      <Stack spacing={5}>
        <Image src={src} alt={src} />
        <Stack spacing={5}>
          <Stack spacing={1}>
            <Text variant="highlighted">{highlight}</Text>
            <Text fontWeight="bold">{title}</Text>
          </Stack>
          <Text fontSize="sm">{description}</Text>
        </Stack>
      </Stack>
    </ChakraCard>
  );
};
