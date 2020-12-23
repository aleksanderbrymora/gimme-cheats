import { Query, Resolver, Args } from '@nestjs/graphql';
import { Quizlet, WordPair } from './quizlet.model';
import { QuizletService } from './quizlet.service';

@Resolver()
export class QuizletResolver {
  constructor(private readonly quizletService: QuizletService) {}

  @Query((_returns) => Quizlet, { nullable: true })
  async quizlet(@Args('url') url: string): Promise<Quizlet> {
    return this.quizletService.getQuizletData(url);
  }
}
