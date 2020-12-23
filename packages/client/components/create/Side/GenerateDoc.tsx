import { Button } from '@chakra-ui/react';
import React from 'react';
import { generateDoc } from 'lib/docx';

const GenerateDoc = () => {
  return (
    <Button
      variant='solid'
      w='100%'
      mt={5}
      fontSize={20}
      py={8}
      onClick={generateDoc}
    >
      GenerateDoc
    </Button>
  );
};

export default GenerateDoc;
