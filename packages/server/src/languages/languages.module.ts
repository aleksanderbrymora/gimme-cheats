import { Module } from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { LanguagesResolver } from './languages.resolver';
import { LanguageEntity } from './language.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LanguageEntity])],
  exports: [LanguagesService],
  providers: [LanguagesResolver, LanguagesService],
})
export class LanguagesModule {}
