import { Query, Resolver } from '@nestjs/graphql';
import { SheetsService } from './sheets.service';
import { Sheet } from './sheet.model';

@Resolver()
export class SheetsResolver {
  constructor(private readonly sheetsService: SheetsService) {}

  @Query(() => [Sheet], { name: 'sheets' })
  async sheet(): Promise<Sheet> {
    return this.sheetsService.getAllSheets();
  }
}
