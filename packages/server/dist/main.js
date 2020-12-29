"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const seed_1 = require("./seed");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(process.env.PORT || 4000);
    if (process.env.NODE_ENV !== 'production') {
        await seed_1.seed();
        console.log('seeded the db');
    }
    console.log('Server running at http://localhost:4000/graphql');
}
bootstrap();
//# sourceMappingURL=main.js.map