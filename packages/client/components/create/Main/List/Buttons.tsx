import { Flex, IconButton } from '@chakra-ui/react';
import { Instance } from 'mobx-state-tree';
import { Word } from 'models/Words';
import { CheckIcon, CloseIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons';

export const Buttons: React.FC<{
  isEditing: boolean;
  commitEdit: () => void;
  isValidEdit: () => boolean;
  handleEditStart: () => void;
  item: Instance<typeof Word>;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({
  commitEdit,
  isEditing,
  isValidEdit,
  handleEditStart,
  item,
  setIsEditing,
}) => {
  return (
    <Flex ml='2rem'>
      {isEditing ? (
        <>
          <IconButton
            aria-label='confirm edit'
            icon={<CheckIcon />}
            onClick={commitEdit}
            mr='1rem'
            isDisabled={!isValidEdit()}
          />
          <IconButton
            aria-label='discard edit'
            icon={<CloseIcon />}
            onClick={() => setIsEditing(false)}
          />
        </>
      ) : (
        <>
          <IconButton
            aria-label='edit this word'
            icon={<EditIcon />}
            mr='1rem'
            onClick={handleEditStart}
          />
          <IconButton
            aria-label='delete this word'
            icon={<DeleteIcon />}
            onClick={item.remove}
          />
        </>
      )}
    </Flex>
  );
};
