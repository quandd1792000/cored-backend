"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiProfileFiles = exports.ApiRegisterFiles = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
function ApiRegisterFiles() {
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')), (0, swagger_1.ApiConsumes)('multipart/form-data'), (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                URLPersonalAccidentsInsurance: {
                    type: 'file',
                    format: 'binary',
                },
                URLIdentityCard: {
                    type: 'file',
                    format: 'binary',
                },
                URLform101: {
                    type: 'file',
                    format: 'binary',
                },
                URLHiringContract: {
                    type: 'file',
                    format: 'binary',
                },
                URLInsurancePolicy: {
                    type: 'file',
                    format: 'binary',
                },
                URLCarLicense: {
                    type: 'file',
                    format: 'binary',
                },
                URLDrivingLicense: {
                    type: 'file',
                    format: 'binary',
                },
            },
        },
    }));
}
exports.ApiRegisterFiles = ApiRegisterFiles;
function ApiProfileFiles() {
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')), (0, swagger_1.ApiConsumes)('multipart/form-data'), (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                URLDrivingLicense: {
                    type: 'file',
                    format: 'binary',
                },
                URLCarLicense: {
                    type: 'file',
                    format: 'binary',
                },
                URLPersonalAccidentsInsurance: {
                    type: 'file',
                    format: 'binary',
                },
                URLPensionPolicy: {
                    type: 'file',
                    format: 'binary',
                },
                URLLifeInsurance: {
                    type: 'file',
                    format: 'binary',
                },
                URLHealthInsurance: {
                    type: 'file',
                    format: 'binary',
                },
                URLInsurancePolicy: {
                    type: 'file',
                    format: 'binary',
                },
            },
        },
    }));
}
exports.ApiProfileFiles = ApiProfileFiles;
//# sourceMappingURL=user.decorator.js.map