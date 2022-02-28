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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_dto_1 = require("./dto/auth.dto");
const users_entity_1 = require("../users/entities/users.entity");
const swagger_1 = require("@nestjs/swagger");
const public_decorator_1 = require("../../decorators/public.decorator");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const uuid_1 = require("uuid");
const fs = require("fs");
const user_decorator_1 = require("../../decorators/user.decorator");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async login(body) {
        const user = await this.authService.login(body);
        return user;
    }
    async register(body) {
        return await this.authService.register(body);
    }
    async uploadFiles(files, req) {
        return await this.authService.uploadFiles(req.user._id, files);
    }
    async forgotPassword(body) {
        return await this.authService.forgotPassword(body);
    }
    async verifyOtp(body) {
        return await this.authService.verifyOtp(body);
    }
};
__decorate([
    (0, common_1.Post)('/login'),
    (0, public_decorator_1.Public)(),
    (0, swagger_1.ApiOkResponse)({ type: users_entity_1.User }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('/register'),
    (0, public_decorator_1.Public)(),
    (0, swagger_1.ApiOkResponse)({ type: users_entity_1.User }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.RegisterDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, user_decorator_1.ApiRegisterFiles)(),
    (0, common_1.Post)('/register/upload-files'),
    (0, common_1.UseInterceptors)((0, platform_express_1.AnyFilesInterceptor)({
        storage: (0, multer_1.diskStorage)({
            destination: (req, file, cb) => {
                const user = req.user;
                fs.mkdirSync(process.env.PATH_IMAGE + '/' + user._id + '/' + file.fieldname, {
                    recursive: true,
                });
                cb(null, process.env.PATH_IMAGE +
                    '/' +
                    user._id +
                    '/' +
                    file.fieldname +
                    '/');
            },
            filename: (req, files, cb) => {
                const filename = (0, uuid_1.v4)();
                cb(null, `${filename}.png`);
            },
        }),
    })),
    (0, swagger_1.ApiOkResponse)({ type: users_entity_1.User }),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "uploadFiles", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('/forgot-password'),
    (0, public_decorator_1.Public)(),
    (0, swagger_1.ApiOkResponse)({ type: users_entity_1.User }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.ForgotPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Post)('/verify-otp'),
    (0, public_decorator_1.Public)(),
    (0, swagger_1.ApiOkResponse)({ type: users_entity_1.User }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.VerifyOtpDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyOtp", null);
AuthController = __decorate([
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map