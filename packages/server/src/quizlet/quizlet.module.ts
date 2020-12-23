import { Module } from '@nestjs/common';
import { QuizletService } from './quizlet.service';
import { QuizletResolver } from './quizlet.resolver';

@Module({
  providers: [QuizletResolver, QuizletService]
})
export class QuizletModule {}
