import { Query, Resolver } from '@nestjs/graphql';
import { SheetsService } from './sheets.service';
import { Sheet } from './sheet.model';

@Resolver()
export class SheetsResolver {
  constructor(private readonly sheetsService: SheetsService) {}
  @Query(() => Sheet)
  async sheet() {
    return {
      content: 'sup',
    };
  }
}
