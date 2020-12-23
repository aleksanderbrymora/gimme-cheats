import { Quizlet } from './quizlet.model';
import { QuizletService } from './quizlet.service';
export declare class QuizletResolver {
    private readonly quizletService;
    constructor(quizletService: QuizletService);
    quizlet(url: string): Promise<Quizlet>;
}
