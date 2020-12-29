import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Sheet } from './sheet.model';
import { SheetsService } from './sheets.service';
import { CreateSheetInput } from './create-sheet.input';

@Resolver()
export class SheetsResolver {
  constructor(private readonly sheetsService: SheetsService) {}

  @Query(() => [Sheet], { name: 'sheets' })
  async sheets(): Promise<Sheet[]> {
    return this.sheetsService.getAllSheets();
  }

  @Mutation(() => Sheet)
  async createSheet(
    @Args('createSheetInput') createSheetInput: CreateSheetInput,
  ): Promise<Sheet> {
    return this.sheetsService.createSheet(createSheetInput);
  }
}
