import { Module } from '@nestjs/common';
import { SheetsService } from './sheets.service';
import { SheetsResolver } from './sheets.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sheet } from './sheet.model';

@Module({
  imports: [TypeOrmModule.forFeature([Sheet])],
  exports: [SheetsService],
  providers: [SheetsResolver, SheetsService],
})
export class SheetsModule {}
