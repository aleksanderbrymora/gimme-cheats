import { gql, useQuery } from '@apollo/client';
import { Box } from '@chakra-ui/react';
import React from 'react';
import Card from './Card';
import { ISheet } from './types/ISheet';
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

interface SheetResponse {
  sheets: ISheet[];
}

const Main = () => {
  const { loading, error, data } = useQuery<SheetResponse>(GET_SHEETS);

  if (loading) return <LoadingCards />;
  if (error || data?.sheets.length === 0) throw error;

  const { sheets } = data!;

  return (
    <Box pt={9}>
      {sheets.map((s) => (
        <Card sheet={s} />
      ))}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </Box>
  );
};

export default Main;
