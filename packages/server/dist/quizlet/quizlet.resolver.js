"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizletResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const quizlet_model_1 = require("./quizlet.model");
const quizlet_service_1 = require("./quizlet.service");
let QuizletResolver = class QuizletResolver {
    constructor(quizletService) {
        this.quizletService = quizletService;
    }
    async quizlet(url) {
        return this.quizletService.getQuizletData(url);
    }
};
__decorate([
    graphql_1.Query((_returns) => quizlet_model_1.Quizlet, { nullable: true }),
    __param(0, graphql_1.Args('url')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuizletResolver.prototype, "quizlet", null);
QuizletResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [quizlet_service_1.QuizletService])
], QuizletResolver);
exports.QuizletResolver = QuizletResolver;
//# sourceMappingURL=quizlet.resolver.js.map