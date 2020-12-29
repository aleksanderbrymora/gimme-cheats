import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sheet } from './sheet.model';

@Injectable()
export class SheetsService {
  constructor(
    @InjectRepository(Sheet)
    private sheetRepository: Repository<Sheet>,
  ) {}

  async getAllSheets(): Promise<Sheet[]> {
    return this.sheetRepository.find({});
  }
}
