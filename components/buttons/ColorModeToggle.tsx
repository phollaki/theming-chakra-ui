import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Button, useColorMode } from '@chakra-ui/react'
import React from 'react'

export const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button colorScheme="primary" onClick={toggleColorMode}>
      {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}
