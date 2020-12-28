import { gql } from '@apollo/client';
import { Grid } from '@chakra-ui/react';
import { initializeApollo } from 'lib/apolloClient';
import { observer } from 'mobx-react';
import { InferGetStaticPropsType } from 'next';
import React from 'react';
import Main from '../components/create/Main';
import Side from '../components/create/Side';
import { rootStore } from '../models/Root';

const Create = observer(
  ({ languages }: InferGetStaticPropsType<typeof getStaticProps>) => {
    rootStore.sheet.setLanguages(languages);

    return (
      <Grid
        templateColumns='4fr 1fr'
        maxW='1200px'
        mx='auto'
        py='1rem'
        px='2rem'
        minH='100vh'
      >
        <Main />
        <Side />
      </Grid>
    );
  },
);

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const data = await apolloClient.query({
    query: gql`
      query languages {
        getLanguages {
          emoji
          id
          name
        }
      }
    `,
  });

  const languages = data.data.getLanguages.map(
    ({ emoji, name, id }: { emoji: string; name: string; id: number }) => ({
      emoji,
      name,
      id,
    }),
  );

  console.log(languages);

  return {
    props: {
      languages,
    },
  };
}

export default Create;
