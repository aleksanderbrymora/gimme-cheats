import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLanguageInput } from './create-language.input';
import { LanguageEntity } from './language.entity';
import { Language } from './language.model';

@Injectable()
export class LanguagesService {
  constructor(
    @InjectRepository(LanguageEntity)
    private languageRepository: Repository<LanguageEntity>,
  ) {}

  async createLanguage(
    createLanguageInput: CreateLanguageInput,
  ): Promise<LanguageEntity> {
    const { emoji, name } = createLanguageInput;
    const language = this.languageRepository.create({ name, emoji });
    return this.languageRepository.save(language);
  }

  async createLanguages(
    createLanguageInput: CreateLanguageInput[],
    // ): Promise<LanguageEntity[]> {
  ): Promise<void> {
    const query = this.languageRepository.createQueryBuilder('language');
    const languages = await query
      .insert()
      .values(createLanguageInput)
      .execute();
    console.log(languages);
  }

  async getAllLanguages(): Promise<LanguageEntity[]> {
    return this.languageRepository.find({});
  }
}
