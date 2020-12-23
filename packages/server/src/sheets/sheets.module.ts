import { Module } from '@nestjs/common';
import { SheetsService } from './sheets.service';
import { SheetsResolver } from './sheets.resolver';

@Module({
  providers: [SheetsResolver, SheetsService]
})
export class SheetsModule {}
