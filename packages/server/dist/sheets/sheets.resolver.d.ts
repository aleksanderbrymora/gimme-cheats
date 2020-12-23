import { SheetsService } from './sheets.service';
export declare class SheetsResolver {
    private readonly sheetsService;
    constructor(sheetsService: SheetsService);
    sheet(): Promise<{
        content: string;
    }>;
}
