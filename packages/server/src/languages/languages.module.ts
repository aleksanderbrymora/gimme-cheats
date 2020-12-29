import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Language } from './language.model';
import { LanguagesResolver } from './languages.resolver';
import { LanguagesService } from './languages.service';

@Module({
  imports: [TypeOrmModule.forFeature([Language])],
  exports: [LanguagesService],
  providers: [LanguagesResolver, LanguagesService],
})
export class LanguagesModule {}
