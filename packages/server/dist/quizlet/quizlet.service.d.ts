import { Quizlet } from './quizlet.model';
export declare class QuizletService {
    private getQuizletPage;
    getQuizletData(url: string): Promise<Quizlet>;
}
