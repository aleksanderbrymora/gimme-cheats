import { Box, Select, Stack } from '@chakra-ui/react';
import capitalize from 'lodash.capitalize';
import { observer } from 'mobx-react';
import { useMst } from 'models/Root';
import React from 'react';

const LanguageInputs = observer(() => {
  const {
    sheet: { changeFromLanguage, changeToLanguage },
  } = useMst();

  return (
    <Stack spacing={3} isInline my='1rem' justifyContent='space-between'>
      <LanguageInput name='from' onChange={changeFromLanguage} />
      <LanguageInput name='to' onChange={changeToLanguage} />
    </Stack>
  );
});

interface LanguageProps {
  name: 'from' | 'to';
  onChange: (to: string) => void;
}

const LanguageInput: React.FC<LanguageProps> = observer(
  ({ name, onChange }) => {
    const {
      sheet: { languages },
    } = useMst();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      onChange(e.target.value);
    };

    return (
      <Box>
        <label htmlFor={`language-input-${name}`}>{capitalize(name)}</label>
        <Select onChange={handleChange} id={`language-input-${name}`}>
          {languages.map((l) => (
            <option key={l.id + name} value={l.name}>
              {l.name}
            </option>
          ))}
        </Select>
      </Box>
    );
  },
);

export default LanguageInputs;
