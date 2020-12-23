import { Test, TestingModule } from '@nestjs/testing';
import { SheetsResolver } from './sheets.resolver';
import { SheetsService } from './sheets.service';

describe('SheetsResolver', () => {
  let resolver: SheetsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SheetsResolver, SheetsService],
    }).compile();

    resolver = module.get<SheetsResolver>(SheetsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
