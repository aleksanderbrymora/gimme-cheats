"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_easyconfig_1 = require("nestjs-easyconfig");
const pg_connection_string_1 = require("pg-connection-string");
const sheets_module_1 = require("./sheets/sheets.module");
const quizlet_module_1 = require("./quizlet/quizlet.module");
const users_module_1 = require("./users/users.module");
const user_entity_1 = require("./users/user.entity");
const languages_module_1 = require("./languages/languages.module");
const language_entity_1 = require("./languages/language.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            nestjs_easyconfig_1.EasyconfigModule.register({ path: '.env' }),
            (() => {
                const connectionString = process.env.DATABASE_URL || 'localhost';
                const connectionOptions = pg_connection_string_1.parse(connectionString);
                return typeorm_1.TypeOrmModule.forRoot({
                    type: 'postgres',
                    host: connectionOptions.host,
                    port: parseInt(connectionOptions.port || '5432'),
                    username: connectionOptions.user,
                    password: connectionOptions.password,
                    database: connectionOptions.database,
                    entities: [user_entity_1.UserEntity, language_entity_1.LanguageEntity],
                    synchronize: true,
                    logger: 'advanced-console',
                    dropSchema: process.env.NODE_ENV !== 'production',
                    cache: false,
                    logging: 'all',
                });
            })(),
            graphql_1.GraphQLModule.forRoot({
                debug: true,
                playground: true,
                autoSchemaFile: true,
                sortSchema: true,
                cors: true,
                tracing: true,
                introspection: true,
            }),
            sheets_module_1.SheetsModule,
            quizlet_module_1.QuizletModule,
            users_module_1.UsersModule,
            languages_module_1.LanguagesModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map