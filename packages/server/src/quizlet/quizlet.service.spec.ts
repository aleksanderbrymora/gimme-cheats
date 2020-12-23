import { Test, TestingModule } from '@nestjs/testing';
import { QuizletService } from './quizlet.service';

describe('QuizletService', () => {
  let service: QuizletService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuizletService],
    }).compile();

    service = module.get<QuizletService>(QuizletService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
