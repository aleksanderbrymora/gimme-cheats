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
exports.SheetsResolver = void 0;
const humanize = require("humanize-duration");
const graphql_1 = require("@nestjs/graphql");
const create_sheet_input_1 = require("./create-sheet.input");
const sheet_model_1 = require("./sheet.model");
const sheets_service_1 = require("./sheets.service");
let SheetsResolver = class SheetsResolver {
    constructor(sheetsService) {
        this.sheetsService = sheetsService;
    }
    async sheets() {
        return this.sheetsService.getAllSheets();
    }
    async createSheet(createSheetInput) {
        return this.sheetsService.createSheet(createSheetInput);
    }
    humanDate(sheet) {
        const now = Date.now();
        const updated = Date.parse(sheet.updatedAt.toString());
        const diff = now - updated;
        const humanized = humanize(diff, { round: true, largest: 2 });
        return 'Created ' + humanized + ' ago';
    }
};
__decorate([
    graphql_1.Query(() => [sheet_model_1.Sheet], { name: 'sheets' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SheetsResolver.prototype, "sheets", null);
__decorate([
    graphql_1.Mutation(() => sheet_model_1.Sheet),
    __param(0, graphql_1.Args('createSheetInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sheet_input_1.CreateSheetInput]),
    __metadata("design:returntype", Promise)
], SheetsResolver.prototype, "createSheet", null);
__decorate([
    graphql_1.ResolveField(() => String, {}),
    __param(0, graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sheet_model_1.Sheet]),
    __metadata("design:returntype", String)
], SheetsResolver.prototype, "humanDate", null);
SheetsResolver = __decorate([
    graphql_1.Resolver(() => sheet_model_1.Sheet),
    __metadata("design:paramtypes", [sheets_service_1.SheetsService])
], SheetsResolver);
exports.SheetsResolver = SheetsResolver;
//# sourceMappingURL=sheets.resolver.js.map