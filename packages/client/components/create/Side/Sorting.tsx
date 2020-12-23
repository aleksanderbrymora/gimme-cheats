import { Box, IconButton, Select, Stack } from '@chakra-ui/react';
import { observer } from 'mobx-react';
import React, { ChangeEvent } from 'react';
import { useMst } from 'models/Root';
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';

const Sorting = observer(() => {
  const { sheet } = useMst();

  const handleSortTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const to = e.target.value as typeof sheet.sortBy;
    sheet.changeSortingType(to);
  };

  const handleSortDirectionChange = () =>
    sheet.changeSortingDirection(
      sheet.sortDir === 'ascending' ? 'descending' : 'ascending',
    );

  return (
    <Box my={5}>
      <label htmlFor='sort-options'>Sorting options</label>
      <Stack isInline>
        <Select
          id='sort-options'
          value={sheet.sortBy}
          onChange={handleSortTypeChange}
        >
          <option value='no sort'>No sorting</option>
          <option value='definition'>Definition</option>
          <option value='translation'>Translation</option>
        </Select>
        {sheet.sortBy !== 'no sort' && (
          <IconButton
            onClick={handleSortDirectionChange}
            aria-label='change sorting direction'
            icon={
              sheet.sortDir === 'ascending' ? (
                <ArrowDownIcon />
              ) : (
                <ArrowUpIcon />
              )
            }
          />
        )}
      </Stack>
    </Box>
  );
});

export default Sorting;
