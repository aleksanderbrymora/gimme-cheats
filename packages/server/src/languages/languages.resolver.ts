import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { LanguagesService } from './languages.service';
import { CreateLanguageInput } from './create-language.input';
import { Language } from './language.model';

@Resolver()
export class LanguagesResolver {
  constructor(private readonly languagesService: LanguagesService) {}

  @Mutation(() => Language)
  async createLanguage(
    @Args('createLanguageInput') createLanguageInput: CreateLanguageInput,
  ): Promise<Language> {
    return this.languagesService.createLanguage(createLanguageInput);
  }

  @Mutation(() => [Language])
  async createLanguages(
    @Args({ name: 'createLanguageInput', type: () => [CreateLanguageInput] })
    createLanguageInput: CreateLanguageInput[],
  ): Promise<Language[]> {
    await this.languagesService.createLanguages(createLanguageInput);
    return this.languagesService.getAllLanguages();
  }

  @Query(() => [Language])
  async getLanguages(): Promise<Language[]> {
    return this.languagesService.getAllLanguages();
  }
}
