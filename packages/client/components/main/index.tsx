import { gql } from '@apollo/client';
import { Box } from '@chakra-ui/react';
import React from 'react';
import Card from './Card';
import LoadingCards from './LoadingCards';

const GET_SHEETS = gql`
  query Sheets {
    sheets {
      title
      updatedAt
      points
      user {
        username
      }
    }
  }
`;

const Main = () => {
  return (
    <Box pt={9}>
      {/* <Card /> */}
      <LoadingCards />
    </Box>
  );
};

export default Main;
