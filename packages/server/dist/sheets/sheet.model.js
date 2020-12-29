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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sheet = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let Sheet = class Sheet {
};
__decorate([
    graphql_1.Field(() => graphql_1.Int),
    __metadata("design:type", Number)
], Sheet.prototype, "id", void 0);
__decorate([
    class_validator_1.Length(1, 50),
    graphql_1.Field(),
    __metadata("design:type", String)
], Sheet.prototype, "title", void 0);
__decorate([
    class_validator_1.Min(0),
    graphql_1.Field(() => graphql_1.Int, { defaultValue: 0 }),
    __metadata("design:type", Number)
], Sheet.prototype, "forkedTimes", void 0);
__decorate([
    class_validator_1.Min(0),
    graphql_1.Field(() => graphql_1.Int, { defaultValue: 0 }),
    __metadata("design:type", Number)
], Sheet.prototype, "lookedAtTimes", void 0);
__decorate([
    class_validator_1.Min(0),
    graphql_1.Field(() => graphql_1.Int, { defaultValue: 0 }),
    __metadata("design:type", Number)
], Sheet.prototype, "points", void 0);
__decorate([
    graphql_1.Field(() => Boolean, { defaultValue: false }),
    __metadata("design:type", Boolean)
], Sheet.prototype, "containsProfanity", void 0);
Sheet = __decorate([
    graphql_1.ObjectType()
], Sheet);
exports.Sheet = Sheet;
//# sourceMappingURL=sheet.model.js.map