import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EasyconfigModule } from 'nestjs-easyconfig';
import { parse as parseDBString } from 'pg-connection-string';
import { SheetsModule } from './sheets/sheets.module';
import { QuizletModule } from './quizlet/quizlet.module';

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
        entities: [],
        synchronize: true,
        logger: 'debug',
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
    }),
    SheetsModule,
    QuizletModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
