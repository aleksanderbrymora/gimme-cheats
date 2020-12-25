import { Button, Link } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { signOut } from 'supertokens-auth-react/recipe/emailpassword';
import RouterLink from 'next/link';
import { doesSessionExist } from 'supertokens-auth-react/recipe/session';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(doesSessionExist());
  }, []);

  const handleSignOut = async () => {
    await signOut();
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  return isLoggedIn ? (
    <Button onClick={handleSignOut}>Sign Out</Button>
  ) : (
    <RouterLink href='/auth'>
      <Link as='button' fontSize={18}>
        Signup
      </Link>
    </RouterLink>
  );
};

export default Login;
