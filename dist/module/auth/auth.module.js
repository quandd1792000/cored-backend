"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_1 = require("./strategy/jwt.strategy");
const users_module_1 = require("../users/users.module");
const users_service_1 = require("../users/users.service");
const local_strategy_1 = require("./strategy/local.strategy");
const core_1 = require("@nestjs/core");
const jwt_auth_guard_1 = require("./guards/jwt-auth.guard");
const typeorm_1 = require("@nestjs/typeorm");
const dotenv = require("dotenv");
const users_entity_1 = require("../users/entities/users.entity");
const sms_otp_service_1 = require("../sms-otp/sms-otp.service");
const sms_otp_entity_1 = require("../sms-otp/entities/sms-otp.entity");
dotenv.config();
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([users_entity_1.User, sms_otp_entity_1.SmsOtp]),
            passport_1.PassportModule,
            users_module_1.UsersModule,
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_OR_KEY,
                signOptions: { expiresIn: '365d' },
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            jwt_strategy_1.JwtStrategy,
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_auth_guard_1.JwtAuthGuard,
            },
            local_strategy_1.LocalStrategy,
            users_service_1.UsersService,
            sms_otp_service_1.SmsOtpService,
        ],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map