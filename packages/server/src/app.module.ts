import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EasyconfigModule } from 'nestjs-easyconfig';
import { parse as parseDBString } from 'pg-connection-string';
import { SheetsModule } from './sheets/sheets.module';
import { QuizletModule } from './quizlet/quizlet.module';
import { UsersModule } from './users/users.module';
import { User } from './users/user.model';
import { LanguagesModule } from './languages/languages.module';
import { Language } from './languages/language.model';
import { Sheet } from './sheets/sheet.model';

@Module({
  imports: [
    EasyconfigModule.register({ path: '.env' }),
    (() => {
      const connectionString = process.env.DATABASE_URL || 'localhost';
      const connectionOptions = parseDBString(connectionString);

      return TypeOrmModule.forRoot({
        type: 'postgres',
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
    })(),
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: true,
      sortSchema: true,
      cors: true,
      tracing: true,
      introspection: true,
    }),
    SheetsModule,
    QuizletModule,
    UsersModule,
    LanguagesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
