import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  CloseButton,
} from '@chakra-ui/react';
import React from 'react';
import capitalize from 'lodash.capitalize';

export const Error: React.FC<{
  what: string;
  close: () => void;
}> = ({ what, close }) => {
  return (
    <Alert status='error' my='1rem' data-testid='warning-input-empty'>
      <AlertIcon />
      <AlertTitle mr={2}>Input can't be empty!</AlertTitle>
      <AlertDescription>
        You left "{capitalize(what)}" field empty. Make sure you fill it in.
      </AlertDescription>
      <CloseButton position='absolute' right='8px' top='8px' onClick={close} />
    </Alert>
  );
};
