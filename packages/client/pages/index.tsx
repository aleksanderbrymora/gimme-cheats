import Head from 'next/head';
import { Box, Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box maxW={1200} m='auto' px='1rem'>
        <Heading>Home</Heading>
      </Box>
    </div>
  );
}
