import React from 'react';
import { useColorMode, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label='Toggle current theme'
      icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
    />
  );
};

export default ThemeToggle;
