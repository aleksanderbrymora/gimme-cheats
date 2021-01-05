import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Sheet } from '../../generated/graphql';

const Card: React.FC<{ sheet: Sheet }> = ({ sheet }) => {
  return (
    <Box>
      <Heading as='h1'>{sheet.title}</Heading>
      <Text>{sheet.humanDate}</Text>
    </Box>
  );
};

export default Card;
