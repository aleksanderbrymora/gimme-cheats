import {
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import ThemeToggle from './ThemeToggle';
import RouterLink from 'next/link';
import { SearchIcon } from '@chakra-ui/icons';

const Navbar = () => {
  return (
    <Flex
      bg='gray.800'
      justifyContent='space-between'
      maxW='1200px'
      as='nav'
      margin='auto'
      px='2rem'
      alignItems='center'
      py={3}
    >
      <RouterLink href='/'>
        <Stack spacing={3} isInline align='center'>
          <Heading>🧠</Heading>
          <Heading size='lg' as='h1'>
            Gimme Cheats
          </Heading>
        </Stack>
      </RouterLink>
      <Stack isInline spacing={5} align='center'>
        <Stack isInline spacing={8}>
          <RouterLink href='/'>
            <Link fontSize={18}>Home</Link>
          </RouterLink>
          <RouterLink href='/create'>
            <Link fontSize={18}>Create</Link>
          </RouterLink>
        </Stack>
        <InputGroup>
          <InputLeftElement children={<SearchIcon />} />
          <Input type='phone' placeholder='Search' />
        </InputGroup>
        <ThemeToggle />
      </Stack>
    </Flex>
  );
};

export default Navbar;
