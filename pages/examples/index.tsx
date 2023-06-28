import { SearchIcon } from '@chakra-ui/icons'
import { Box, Button, Center, IconButton, ChakraProvider, ColorModeScript, Container,  HStack, Heading, SimpleGrid, Stack, Text, VStack, extendTheme, useColorMode, Switch, Select, Tag, Spinner, useToast, SkeletonCircle, SkeletonText, AccordionPanel, AccordionIcon, AccordionButton, AccordionItem, Accordion, Link } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'

function ToastExample() {
  const toast = useToast()
  return (
    <Button
      colorScheme="green"
      onClick={() =>
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Show Toast
    </Button>
  )
}


function AccordionComponent() {
  return (
  <Accordion maxW="96">
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Section 1 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
)
}


function Examples() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Center h="full" py="28">
      <VStack spacing={10}>
        <Link href="https://chakra-ui.com/docs/components">https://chakra-ui.com/docs/components</Link>
        <Heading color="blue.500">Buttons</Heading>
        <Container>
          <Button onClick={toggleColorMode} variant="outline" colorScheme="gray">{colorMode}</Button>
          <Button variant="outline" colorScheme="gray">Outline</Button>
          <Button variant="ghost" colorScheme="cyan">Ghost</Button>
          <Button variant="solid" colorScheme="pink">Solid</Button>
          <Button variant="link" colorScheme="linkedin">Link</Button>
          <Button variant="solid" colorScheme="messenger">Solid</Button>
          <IconButton colorScheme='green' aria-label='Search database' icon={<SearchIcon />} />
        </Container>

        <Heading>Switch</Heading>
        <Stack align='center' direction='row'>
          <Switch size='sm' colorScheme="pink"/>
          <Switch size='md' colorScheme="green"/>
          <Switch size='lg' />
        </Stack>

        <Heading>Select</Heading>
        <Stack spacing={3}>
          <Select placeholder='extra small size' size='xs' />
          <Select placeholder='small size' size='sm' />
          <Select placeholder='medium size' size='md' />
          <Select placeholder='large size' size='lg' />
        </Stack>

        <Stack direction='row' spacing={4}>
          <Spinner size='xs'/>
          <Spinner size='sm' />
          <Spinner size='md' />
          <Spinner size='lg' />
          <Spinner size='xl' />
        </Stack>

        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />

        <Heading>Tag</Heading>
        <HStack spacing={4}>
          {['sm', 'md', 'lg'].map((size) => (
            <Tag size={size} key={size} variant='solid' colorScheme='teal'>
              Teal
            </Tag>
          ))}
        </HStack>

        <ToastExample />

        <Heading color="pink.500">Typography</Heading>
        <SimpleGrid >
          <Box>
            <Heading _dark={{ color: 'pink.200'}} size="4xl">Heading</Heading>
            <Heading _dark={{ color: 'green.200'}} size="3xl">Heading</Heading>
            <Heading _dark={{ color: 'cyan.200'}} size="2xl">Heading</Heading>
            <Heading _light={{ color: 'pink.800'}} size="xl">Heading</Heading>
            <Heading _light={{ color: 'orange.800'}} size="lg">Heading</Heading>
            <Heading _light={{ color: 'red.800'}} size="md">Heading</Heading>
            <Heading size="sm">Heading</Heading>
            <Heading size="xs">Heading</Heading>
          </Box>
          <Box>
            <Text fontSize="9xl">Text</Text>
            <Text fontSize="8xl">Text</Text>
            <Text fontSize="7xl">Text</Text>
            <Text fontSize="6xl">Text</Text>
            <Text fontSize="5xl">Text</Text>
            <Text fontSize="4xl">Text</Text>
            <Text fontSize="3xl">Text</Text>
            <Text fontSize="2xl">Text</Text>
            <Text fontSize="xl">Text</Text>
            <Text fontSize="lg">Text</Text>
            <Text fontSize="md">Text</Text>
            <Text fontSize="sm">Text</Text>
            <Text fontSize="xs">Text</Text>
            <Text fontSize="2xs">Text</Text>
            <Text fontSize="3xs">Text</Text>
            <Text fontSize="0.02px">Text</Text>
            <Text fontSize="0.001px">Text</Text>
          </Box>
        </SimpleGrid>

        <Heading>Skeleton</Heading>
        <Box w="96" padding='6' boxShadow='lg' bg='white'>
          <SkeletonCircle size='10' />
          <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
        </Box>

        <Heading>Accordion</Heading>
        <AccordionComponent />
      </VStack>
    </Center>
  )
}

export default function WrappedExamplePage () {
  const theme = extendTheme({
    config: {
      initialColorMode: 'light',
      useSystemColorMode: false,
    }
  })

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Examples</title>
        <meta name="description" content="Examples with Chakra ui" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ColorModeScript initialColorMode={theme.initialColorMode} />
      <Examples />
    </ChakraProvider>
  )
}

