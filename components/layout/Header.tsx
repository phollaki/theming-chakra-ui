"use client";
import Box from "@/theme/Box";
import {
  HStack,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ColorModeToggle } from "../buttons/ColorModeToggle";
import { MobileMenu } from "./MobileMenu";
import Flex from "@/theme/Flex";

export const Header = () => {
  return (
    <Box as="nav" variant="nav">
      <Flex variant="rowSpaceBetween">
        <Link href="/" w="150px">
          <Image
            rounded="full"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.nofluffjobs.com%2Fcompanies%2Flogos%2Foriginal%2Fbene_studio_logowhite36_20220622_120259.png&f=1&nofb=1&ipt=e3c4f911c0a7ebc3085131f4c44a1e0fda014bb90c3ff65f7ed183a2519e48b6&ipo=images"
            alt="bene logo"
          />
        </Link>
        <HStack spacing={3} display={["none", "none", "flex"]}>
          <Link href="/examples">Examples</Link>
          <Text>Services</Text>
          <Text>Accelerator</Text>
          <Text>Networking</Text>
          <Text>Resources</Text>
          <Text>Join Us</Text>
          <Text>Contact</Text>
          <ColorModeToggle />
        </HStack>
        <MobileMenu />
      </Flex>
    </Box>
  );
};
