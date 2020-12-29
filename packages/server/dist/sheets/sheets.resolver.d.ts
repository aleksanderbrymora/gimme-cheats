import { CreateSheetInput } from './create-sheet.input';
import { Sheet } from './sheet.model';
import { SheetsService } from './sheets.service';
export declare class SheetsResolver {
    private readonly sheetsService;
    constructor(sheetsService: SheetsService);
    sheets(): Promise<Sheet[]>;
    createSheet(createSheetInput: CreateSheetInput): Promise<Sheet>;
}
