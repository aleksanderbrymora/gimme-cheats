import { Repository } from 'typeorm';
import { Sheet } from './sheet.model';
export declare class SheetsService {
    private sheetRepository;
    constructor(sheetRepository: Repository<Sheet>);
    getAllSheets(): Promise<Sheet[]>;
}
