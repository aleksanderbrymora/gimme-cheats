import { destroy, types } from 'mobx-state-tree';
import { Language } from './Language';

export const orderTypes = ['asc', 'desc', 'no order'];

export const Sheet = types
  .model({
    languages: types.optional(types.array(Language), []),
    fromLang: types.string, // from what language
    toLang: types.string, // to what language
    title: '',
    sortBy: types.optional(
      types.enumeration('sortBy', ['no sort', 'definition', 'translation']),
      'no sort',
    ),
    sortDir: types.optional(
      types.enumeration('sortDirection', ['ascending', 'descending']),
      'ascending',
    ),
  })
  .actions((self) => ({
    changeFromLanguage(to: string) {
      self.fromLang = to;
    },
    changeToLanguage(to: string) {
      self.toLang = to;
    },
    changeTitle(to: string) {
      self.title = to;
    },
    changeSortingType(to: typeof self.sortBy) {
      self.sortBy = to;
    },
    changeSortingDirection(to: typeof self.sortDir) {
      self.sortDir = to;
    },
    setLanguages(languages: { name: string; emoji: string; id: number }[]) {
      self.languages.forEach((i) => destroy(i));
      languages.forEach((l) => self.languages.push(l));
    },
  }));
