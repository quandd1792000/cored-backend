"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsOtpModule = void 0;
const common_1 = require("@nestjs/common");
const sms_otp_service_1 = require("./sms-otp.service");
const sms_otp_controller_1 = require("./sms-otp.controller");
const typeorm_1 = require("@nestjs/typeorm");
const sms_otp_entity_1 = require("./entities/sms-otp.entity");
let SmsOtpModule = class SmsOtpModule {
};
SmsOtpModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([sms_otp_entity_1.SmsOtp])],
        controllers: [sms_otp_controller_1.SmsOtpController],
        providers: [sms_otp_service_1.SmsOtpService],
    })
], SmsOtpModule);
exports.SmsOtpModule = SmsOtpModule;
//# sourceMappingURL=sms-otp.module.js.map