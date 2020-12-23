import { Box, Heading } from '@chakra-ui/react';
import { observer } from 'mobx-react';
import React from 'react';
import { useMst } from 'models/Root';
import pluralize from 'pluralize';

const WordCount = observer(() => {
  const {
    words: { totalItems },
  } = useMst();
  return (
    <Box>
      <Heading data-testid='word-count' as='h2' size='sm'>
        {totalItems === 0
          ? 'Add some words!'
          : `You have ${totalItems} ${pluralize('word', totalItems)}`}
      </Heading>
    </Box>
  );
});

export default WordCount;
