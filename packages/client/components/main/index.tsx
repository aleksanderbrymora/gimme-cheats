import { Box } from '@chakra-ui/react';
import React from 'react';
import { Sheet, useSheetsQuery } from '../../generated/graphql';
import Card from './Card';
import LoadingCards from './LoadingCards';

const Main = () => {
  const { loading, error, data } = useSheetsQuery();

  if (loading) return <LoadingCards />;
  if (error || !data?.sheets) throw error;

  const { sheets } = data;

  return (
    <Box pt={9}>
      {sheets.map((s) => (
        <Card key={s.id} sheet={s as Sheet} />
      ))}
    </Box>
  );
};

export default Main;
