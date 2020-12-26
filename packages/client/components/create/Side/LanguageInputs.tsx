import { Box, Input, Select, Stack } from '@chakra-ui/react';
import { observer } from 'mobx-react';
import React from 'react';
import { useMst } from 'models/Root';
import capitalize from 'lodash.capitalize';

const LanguageInputs = observer(() => {
  const {
    sheet: { changeFromLanguage, changeToLanguage, fromLang, toLang },
  } = useMst();
  return (
    <Stack spacing={3} isInline my='1rem' justifyContent='space-between'>
      <LanguageInput
        name='from'
        onChange={changeFromLanguage}
        value={fromLang}
      />
      <LanguageInput name='to' onChange={changeToLanguage} value={toLang} />
    </Stack>
  );
});

interface LanguageProps {
  name: 'from' | 'to';
  onChange: (to: string) => void;
  value: string;
}

const LanguageInput: React.FC<LanguageProps> = observer(
  ({ name, onChange, value }) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      onChange(e.target.value);
    };

    return (
      <Box>
        <label htmlFor={`language-input-${name}`}>{capitalize(name)}</label>
        <Select
          onChange={handleChange}
          placeholder={capitalize(name)}
          id={`language-input-${name}`}
        >
          <option value='option1'>Polish</option>
          <option value='option2'>English</option>
        </Select>
      </Box>
    );
  },
);

export default LanguageInputs;
