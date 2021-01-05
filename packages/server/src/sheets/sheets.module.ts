import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sheet } from './sheet.model';
import { SheetsResolver } from './sheets.resolver';
import { SheetsService } from './sheets.service';

@Module({
  imports: [TypeOrmModule.forFeature([Sheet])],
  providers: [SheetsResolver, SheetsService],
  exports: [SheetsService],
})
export class SheetsModule {}
