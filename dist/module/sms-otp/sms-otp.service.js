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
exports.SmsOtpService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const sms_otp_entity_1 = require("./entities/sms-otp.entity");
let SmsOtpService = class SmsOtpService {
    constructor(SmsOtpRepository) {
        this.SmsOtpRepository = SmsOtpRepository;
    }
    async create() {
        const otp = Math.floor(100000 + Math.random() * 900000);
        const ttl = 2 * 60 * 1000;
        const expires = Date.now() + ttl;
        const hash = await bcrypt.hash(String(otp), 10);
        const save = {
            expires: expires,
            hash: hash,
        };
        return { smsId: (await this.SmsOtpRepository.save(save))._id.toString() };
    }
    findAll() {
        return `This action returns all smsOtp`;
    }
    async findOne(query) {
        const payment = await this.SmsOtpRepository.findOne({ where: query });
        if (payment) {
            payment._id = payment._id.toString();
            return payment;
        }
        return null;
    }
    update(id, updateSmsOtpDto) {
        return `This action updates a #${id} smsOtp`;
    }
    remove(id) {
        return `This action removes a #${id} smsOtp`;
    }
};
SmsOtpService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sms_otp_entity_1.SmsOtp)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SmsOtpService);
exports.SmsOtpService = SmsOtpService;
//# sourceMappingURL=sms-otp.service.js.map