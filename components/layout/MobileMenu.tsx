import Box from "@/theme/Box";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { ColorModeToggle } from "../buttons/ColorModeToggle";

export const MobileMenu = () => {
  return (
    <Box display={["flex", "flex", "none"]}>
      <Menu colorScheme="primary">
        <MenuButton
          colorScheme="primary"
          as={Button}
        ><HamburgerIcon /></MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
          <ColorModeToggle />
        </MenuList>
      </Menu>
    </Box>
  );
};
