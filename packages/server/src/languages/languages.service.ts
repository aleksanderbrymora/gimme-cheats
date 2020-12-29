import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLanguageInput } from './create-language.input';
import { Language } from './language.model';

@Injectable()
export class LanguagesService {
  constructor(
    @InjectRepository(Language)
    private languageRepository: Repository<Language>,
  ) {}

  async createLanguage(
    createLanguageInput: CreateLanguageInput,
  ): Promise<Language> {
    const { emoji, name } = createLanguageInput;
    const language = this.languageRepository.create({ name, emoji });
    return this.languageRepository.save(language);
  }

  async createLanguages(
    createLanguageInput: CreateLanguageInput[],
  ): Promise<void> {
    const query = this.languageRepository.createQueryBuilder('language');
    await query.insert().values(createLanguageInput).execute();
  }

  async getAllLanguages(): Promise<Language[]> {
    return this.languageRepository.find({});
  }
}
