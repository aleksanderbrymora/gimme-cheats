import { Box } from '@chakra-ui/react';
import { observer } from 'mobx-react';
import React from 'react';
import { useMst } from 'models/Root';
import { WordRow } from './WordRow';

const WordList = observer(() => {
  const { words } = useMst();

  return (
    <Box>
      {words.sortedWords.map((item, i) => (
        <WordRow key={item.id + i} item={item} />
      ))}
    </Box>
  );
});

export default WordList;
