"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SheetsModule = void 0;
const common_1 = require("@nestjs/common");
const sheets_service_1 = require("./sheets.service");
const sheets_resolver_1 = require("./sheets.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const sheet_entity_1 = require("./sheet.entity");
let SheetsModule = class SheetsModule {
};
SheetsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([sheet_entity_1.SheetEntity])],
        exports: [sheets_service_1.SheetsService],
        providers: [sheets_resolver_1.SheetsResolver, sheets_service_1.SheetsService],
    })
], SheetsModule);
exports.SheetsModule = SheetsModule;
//# sourceMappingURL=sheets.module.js.map