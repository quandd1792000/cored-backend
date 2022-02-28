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
exports.SmsOtpController = void 0;
const common_1 = require("@nestjs/common");
const sms_otp_service_1 = require("./sms-otp.service");
const create_sms_otp_dto_1 = require("./dto/create-sms-otp.dto");
const update_sms_otp_dto_1 = require("./dto/update-sms-otp.dto");
const public_decorator_1 = require("../../decorators/public.decorator");
const swagger_1 = require("@nestjs/swagger");
let SmsOtpController = class SmsOtpController {
    constructor(smsOtpService) {
        this.smsOtpService = smsOtpService;
    }
    create(createSmsOtpDto) {
        return this.smsOtpService.create();
    }
    findAll() {
        return this.smsOtpService.findAll();
    }
    findOne(id) {
        return this.smsOtpService.findOne(+id);
    }
    update(id, updateSmsOtpDto) {
        return this.smsOtpService.update(+id, updateSmsOtpDto);
    }
    remove(id) {
        return this.smsOtpService.remove(+id);
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sms_otp_dto_1.CreateSmsOtpDto]),
    __metadata("design:returntype", void 0)
], SmsOtpController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SmsOtpController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SmsOtpController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_sms_otp_dto_1.UpdateSmsOtpDto]),
    __metadata("design:returntype", void 0)
], SmsOtpController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SmsOtpController.prototype, "remove", null);
SmsOtpController = __decorate([
    (0, swagger_1.ApiTags)('Sms-Otp'),
    (0, common_1.Controller)('sms-otp'),
    __metadata("design:paramtypes", [sms_otp_service_1.SmsOtpService])
], SmsOtpController);
exports.SmsOtpController = SmsOtpController;
//# sourceMappingURL=sms-otp.controller.js.map