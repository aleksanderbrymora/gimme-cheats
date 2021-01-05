import Head from 'next/head';
import { Box, Heading } from '@chakra-ui/react';
import Main from 'components/main';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box maxW={1200} m='auto' px='1rem'>
        <Heading>Home</Heading>
        <Main />
      </Box>
    </div>
  );
}
