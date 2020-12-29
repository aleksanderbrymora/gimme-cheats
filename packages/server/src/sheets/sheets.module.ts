import { Module } from '@nestjs/common';
import { SheetsService } from './sheets.service';
import { SheetsResolver } from './sheets.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SheetEntity } from './sheet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SheetEntity])],
  exports: [SheetsService],
  providers: [SheetsResolver, SheetsService],
})
export class SheetsModule {}
