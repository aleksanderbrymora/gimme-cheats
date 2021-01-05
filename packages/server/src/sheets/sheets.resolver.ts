// Not sure why but `*` fixes the issue
import { Type } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Base } from 'src/base/base.entity';
import { BaseResolver } from '../base/base.resolver';
import { CreateSheetInput } from './create-sheet.input';
import { Sheet } from './sheet.model';
import { SheetsService } from './sheets.service';

@Resolver(() => Sheet)
export class SheetsResolver extends BaseResolver(Sheet as Partial<Base>) {
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

  // @ResolveField(() => String, {})
  // humanDate(@Root() sheet: Sheet): string {
  //   const now = Date.now();
  //   const updated = Date.parse(sheet.updatedAt.toString());
  //   const diff = now - updated;
  //   const humanized = humanize(diff, { round: true, largest: 2 });
  //   return `Created ${humanized} ago`;
  // }
}
