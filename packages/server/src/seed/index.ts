import { EasyconfigModule } from 'nestjs-easyconfig';
import { parse as parseDBString } from 'pg-connection-string';
import { createConnection } from 'typeorm';
import { Language } from '../languages/language.model';
import { Sheet } from '../sheets/sheet.model';
import { User } from '../users/user.model';
import { seedLanguages } from './languages';
import { seedUsers } from './users';
import { seedSheets } from './sheets';

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
    entities: [User, Language, Sheet],
    synchronize: true,
    logger: 'advanced-console',
    dropSchema: process.env.NODE_ENV !== 'production',
    cache: false,
    logging: 'all',
  });

  // this would work if some of the entities didnt rely on the others like sheets-> users
  // await Promise.all([seedUsers, seedLanguages].map((f) => f(connection)));
  await seedLanguages(connection);
  await seedUsers(connection);
  await seedSheets(connection);

  return connection.close();
};
