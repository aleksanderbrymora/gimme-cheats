"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizletService = void 0;
const common_1 = require("@nestjs/common");
const quizlet_model_1 = require("./quizlet.model");
const node_html_parser_1 = require("node-html-parser");
const axios_1 = require("axios");
let QuizletService = class QuizletService {
    async getQuizletPage(url) {
        const body = await axios_1.default.get(url);
        console.log(body);
        return body.data;
    }
    async getQuizletData(url) {
        const Q = new quizlet_model_1.Quizlet();
        Q.words || (Q.words = []);
        console.log('starting the scrape. URL: ', url);
        try {
            const data = await this.getQuizletPage(url);
            const root = node_html_parser_1.parse(data);
            const pairs = root.querySelectorAll('.SetPageTerms-term');
            pairs.forEach((p) => {
                const [from, to] = p.querySelectorAll('a');
                const wordPair = new quizlet_model_1.WordPair();
                wordPair.from = from.innerText;
                wordPair.to = to.innerText;
                Q.words = [...Q.words, wordPair];
            });
            const [fromLang, toLang] = pairs[0]
                .querySelectorAll('span')
                .map((span) => span.classNames.find((c) => c.includes('lang')).replace('lang-', ''));
            Q.fromLanguage = fromLang;
            Q.toLanguage = toLang;
            Q.title = root.querySelector('h1').innerText;
            console.log(Q);
            return Q;
        }
        catch (error) {
            throw new Error('Quizlet is currently blocking this server for whatever reason. Give it a sec');
        }
    }
};
QuizletService = __decorate([
    common_1.Injectable()
], QuizletService);
exports.QuizletService = QuizletService;
//# sourceMappingURL=quizlet.service.js.map