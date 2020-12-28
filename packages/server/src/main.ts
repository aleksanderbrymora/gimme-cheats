import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { seed } from './seed';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 4000);
  await seed();
  console.log('Server running at http://localhost:4000/graphql');
}

bootstrap();
