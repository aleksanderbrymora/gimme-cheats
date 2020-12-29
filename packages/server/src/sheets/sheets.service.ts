import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sheet } from './sheet.model';
import { CreateSheetInput } from './create-sheet.input';

@Injectable()
export class SheetsService {
  constructor(
    @InjectRepository(Sheet)
    private sheetRepository: Repository<Sheet>,
  ) {}

  async getAllSheets(): Promise<Sheet[]> {
    return this.sheetRepository.find({});
  }

  async getAllWithUserID(id: number): Promise<Sheet[]> {
    return this.sheetRepository.find({ where: { user: id } });
  }

  async createSheet(createSheetInput: CreateSheetInput): Promise<Sheet> {
    const { containsProfanity, title } = createSheetInput;
    const sheet = this.sheetRepository.create({
      title,
      containsProfanity,
    });

    return this.sheetRepository.save(sheet);
  }
}
