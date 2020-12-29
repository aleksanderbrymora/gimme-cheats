import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SheetEntity } from './sheet.entity';

@Injectable()
export class SheetsService {
  constructor(
    @InjectRepository(SheetEntity)
    private sheetRepository: Repository<SheetEntity>,
  ) {}

  async getAllSheets(): Promise<SheetEntity[]> {
    return this.sheetRepository.find({});
  }
}
