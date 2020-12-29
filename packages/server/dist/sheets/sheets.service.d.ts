import { Repository } from 'typeorm';
import { Sheet } from './sheet.model';
import { CreateSheetInput } from './create-sheet.input';
export declare class SheetsService {
    private sheetRepository;
    constructor(sheetRepository: Repository<Sheet>);
    getAllSheets(): Promise<Sheet[]>;
    getAllWithUserID(id: number): Promise<Sheet[]>;
    createSheet(createSheetInput: CreateSheetInput): Promise<Sheet>;
}
