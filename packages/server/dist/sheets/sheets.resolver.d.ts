import { SheetsService } from './sheets.service';
import { Sheet } from './sheet.model';
export declare class SheetsResolver {
    private readonly sheetsService;
    constructor(sheetsService: SheetsService);
    sheets(): Promise<Sheet[]>;
}
