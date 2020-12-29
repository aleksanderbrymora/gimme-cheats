import { Repository } from 'typeorm';
import { SheetEntity } from './sheet.entity';
export declare class SheetsService {
    private sheetRepository;
    constructor(sheetRepository: Repository<SheetEntity>);
    getAllSheets(): Promise<SheetEntity[]>;
}
