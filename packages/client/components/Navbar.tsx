import { SearchIcon } from '@chakra-ui/icons';
import {
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
} from '@chakra-ui/react';
import RouterLink from 'next/link';
import React from 'react';
import Login from './Login';
import ThemeToggle from './ThemeToggle';

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
        <Stack isInline align='center' spacing={8}>
          <RouterLink href='/'>
            <Link fontSize={18}>Home</Link>
          </RouterLink>
          <RouterLink href='/create'>
            <Link fontSize={18}>Create</Link>
          </RouterLink>
          <Login />
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
