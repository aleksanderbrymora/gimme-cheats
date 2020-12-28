import { Injectable } from '@nestjs/common';
import { Quizlet, WordPair } from './quizlet.model';
import axios from 'axios';
import { parse } from 'node-html-parser';

@Injectable()
export class QuizletService {
  private async getQuizletPage(url: string) {
    const body = await axios.get(url);
    console.log(body);
    return body;
  }

  async getQuizletData(url: string) {
    const Q = new Quizlet();
    Q.words ||= [];

    // Getting the words
    const { data } = await this.getQuizletPage(url);
    const root = parse(data);
    const pairs = root.querySelectorAll('.SetPageTerms-term');
    pairs.forEach((p) => {
      const [from, to] = p.querySelectorAll('a');
      const wordPair = new WordPair();
      wordPair.from = from.innerText;
      wordPair.to = to.innerText;
      Q.words = [...Q.words, wordPair];
    });

    //Getting the languages
    const [fromLang, toLang] = pairs[0]
      .querySelectorAll('span')
      .map((span) =>
        span.classNames.find((c) => c.includes('lang'))!.replace('lang-', ''),
      );

    Q.fromLanguage = fromLang;
    Q.toLanguage = toLang;

    // Getting the title
    Q.title = root.querySelector('h1').innerText;

    console.log(Q);

    return Q;
  }
}
