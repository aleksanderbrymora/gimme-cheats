import { Test, TestingModule } from '@nestjs/testing';
import { QuizletResolver } from './quizlet.resolver';
import { QuizletService } from './quizlet.service';

describe('QuizletResolver', () => {
  let resolver: QuizletResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuizletResolver, QuizletService],
    }).compile();

    resolver = module.get<QuizletResolver>(QuizletResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
