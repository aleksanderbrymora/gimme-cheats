import { Box, Heading, Text } from '@chakra-ui/react';
import { humanizeDate } from 'lib/humanizeDate';
import React from 'react';
import { ISheet } from './types/ISheet';

interface Props {
  sheet: ISheet;
}

const Card: React.FC<Props> = ({ sheet }) => {
  return (
    <Box>
      <Heading as='h1'>{sheet.title}</Heading>
      {/* <Heading as='h2'>{sheet.user.username}</Heading> */}
      <Text>{humanizeDate(sheet.updatedAt)}</Text>
    </Box>
  );
};

export default Card;
