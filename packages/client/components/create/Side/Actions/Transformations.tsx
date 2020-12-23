import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useMst } from 'models/Root';

const Transformations = () => {
  const { words } = useMst();
  return (
    <Menu>
      <MenuButton as={Button} w='100%'>
        Actions
      </MenuButton>
      <MenuList>
        <MenuGroup title='Transform words'>
          <MenuItem onClick={words.makeAllLowercase}>
            Make all words lowercase
          </MenuItem>
          <MenuItem onClick={words.makeAllWordsCapitalized}>
            Make all words capitalised
          </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title='Organize'>
          <MenuItem onClick={words.removeAll}>
            <Stack isInline justify='space-between' align='center'>
              <Text>Remove all words</Text>
              <Icon name='delete' />
            </Stack>
          </MenuItem>
          <MenuItem onClick={words.flip}>
            <Stack isInline justify='space-between' align='center'>
              <Text>Flip words</Text>
              <Icon name='repeat' />
            </Stack>
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default Transformations;
