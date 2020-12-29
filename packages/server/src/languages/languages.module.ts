import { Module } from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { LanguagesResolver } from './languages.resolver';
import { Language } from './language.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Language])],
  exports: [LanguagesService],
  providers: [LanguagesResolver, LanguagesService],
})
export class LanguagesModule {}
