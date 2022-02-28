"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const dotenv = require("dotenv");
const common_1 = require("@nestjs/common");
const express = require("express");
dotenv.config();
const customOptions = {
    swaggerOptions: {
        persistAuthorization: true,
    },
};
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Paycheck API')
        .setDescription('API documentation for Paycheck project')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('docs/api', app, document, customOptions);
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    app.use('/home/paycheck_dev/image-files', express.static('/home/paycheck_dev/image-files'));
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map