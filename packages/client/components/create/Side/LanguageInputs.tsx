import { Box, Select, Stack } from '@chakra-ui/react';
import capitalize from 'lodash.capitalize';
import { observer } from 'mobx-react';
import { useMst } from 'models/Root';
import React from 'react';

const LanguageInputs = observer(() => {
  const {
    sheet: { changeFromLanguage, changeToLanguage, fromLang, toLang },
  } = useMst();

  return (
    <Stack spacing={3} my='1rem' justifyContent='space-between'>
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
    const {
      sheet: { languages },
    } = useMst();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      onChange(e.target.value);
    };

    return (
      <Stack isInline justify='space-between' align='center'>
        <label htmlFor={`language-input-${name}`}>{capitalize(name)}</label>
        <Select
          maxW='80%'
          onChange={handleChange}
          id={`language-input-${name}`}
          value={value ? value : languages[0].name}
        >
          {languages.map((l) => (
            <option key={l.id + name} value={l.name}>
              {`${l.emoji} ${capitalize(l.name)}`}
            </option>
          ))}
        </Select>
      </Stack>
    );
  },
);

export default LanguageInputs;
