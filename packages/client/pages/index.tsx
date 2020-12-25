import Head from 'next/head';
import { Box, Heading } from '@chakra-ui/react';
import {
  getUserId,
  getJWTPayloadSecurely,
  doesSessionExist,
} from 'supertokens-auth-react/recipe/session';
import { signOut } from 'supertokens-auth-react/recipe/emailpassword';
import { useEffect, useState } from 'react';

export default function Home() {
  const [userId, setUserId] = useState<null | string>(null);
  const [jwt, setJwt] = useState<any>(null);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box maxW={1200} m='auto' px='1rem'>
        {JSON.stringify(jwt)}
        {JSON.stringify({ userId })}
        <button onClick={signOut}>Sign Out</button>
        <Heading>Home</Heading>
      </Box>
    </div>
  );
}
