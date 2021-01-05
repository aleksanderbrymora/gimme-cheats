import { Language } from 'src/languages/language.model';
import { Connection } from 'typeorm';
import { LanguagesService } from '../languages/languages.service';

export const seedLanguages = (connection: Connection): Promise<any> => {
  console.log('=============Seeding Languages=================');
  const languageService = new LanguagesService(
    connection.getRepository(Language),
  );

  const languageData = [
    { emoji: '🇨🇳', name: 'chinese' },
    { emoji: '🇪🇸', name: 'spanish' },
    { emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', name: 'english' },
    { emoji: '🇵🇱', name: 'polish' },
    { emoji: '🇮🇳', name: 'hindi' },
    { emoji: '🇵🇹', name: 'portuguese' },
    { emoji: '📅', name: 'date' },
    { emoji: '🇷🇺', name: 'russian' },
    { emoji: '🇯🇵', name: 'japanese' },
    { emoji: '🇫🇷', name: 'french' },
  ];

  return languageService.createLanguages(languageData);
};
