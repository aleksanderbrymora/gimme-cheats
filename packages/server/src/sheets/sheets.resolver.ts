// Not sure why but `*` fixes the issue
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Base } from 'src/base/base.entity';
import { BaseResolver } from '../base/base.resolver';
import { CreateSheetInput } from './create-sheet.input';
import { Sheet } from './sheet.model';
import { SheetsService } from './sheets.service';

@Resolver(() => Sheet)
export class SheetsResolver extends BaseResolver(Sheet) {
  constructor(private readonly sheetsService: SheetsService) {
    super();
  }

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
