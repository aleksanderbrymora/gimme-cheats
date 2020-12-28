import { types } from 'mobx-state-tree';

export const Language = types.model({
  emoji: types.string,
  name: types.string,
  id: types.number,
});
