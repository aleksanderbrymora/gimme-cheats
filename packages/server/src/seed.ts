import { EasyconfigModule } from 'nestjs-easyconfig';
import { parse as parseDBString } from 'pg-connection-string';
import { createConnection } from 'typeorm';
import { Language } from './languages/language.model';
import { LanguagesService } from './languages/languages.service';
import { UserEntity } from './users/user.entity';

export const seed = async (): Promise<void> => {
  EasyconfigModule.register({ path: '.env' });
  const connectionString = process.env.DATABASE_URL || 'localhost';
  const connectionOptions = parseDBString(connectionString);

  const connection = await createConnection({
    type: 'postgres',
    name: 'seed',
    host: connectionOptions.host as string,
    port: parseInt(connectionOptions.port || '5432'),
    username: connectionOptions.user,
    password: connectionOptions.password,
    database: connectionOptions.database as string,
    entities: [UserEntity, Language],
    synchronize: true,
    logger: 'advanced-console',
    dropSchema: process.env.NODE_ENV !== 'production',
    cache: false,
    logging: 'all',
  });
  const languageService = new LanguagesService(
    connection.getRepository(Language),
  );

  const languageData = [
    { emoji: '🇨🇳', name: 'chinese' },
    { emoji: '🇪🇸', name: 'spanish' },
    { emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', name: 'english' },
    { emoji: '🇵🇱', name: 'polish' },
    { emoji: '🇮🇳', name: 'hindi' },
    { emoji: '🇵🇹', name: 'portugese' },
    { emoji: '📅', name: 'date' },
    { emoji: '🇷🇺', name: 'russian' },
    { emoji: '🇯🇵', name: 'japanese' },
    { emoji: '🇫🇷', name: 'french' },
  ];
  await languageService.createLanguages(languageData);
  await connection.close();
};

// run().then(() => console.log('Should be seeded now'));
