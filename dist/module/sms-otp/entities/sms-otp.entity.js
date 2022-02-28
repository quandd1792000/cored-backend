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
exports.SmsOtp = void 0;
const typeorm_1 = require("typeorm");
let SmsOtp = class SmsOtp {
};
__decorate([
    (0, typeorm_1.ObjectIdColumn)({ name: '_id' }),
    __metadata("design:type", String)
], SmsOtp.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'long' }),
    __metadata("design:type", Number)
], SmsOtp.prototype, "expires", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SmsOtp.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'longtext', length: 500 }),
    __metadata("design:type", String)
], SmsOtp.prototype, "hash", void 0);
SmsOtp = __decorate([
    (0, typeorm_1.Entity)('sms_otp')
], SmsOtp);
exports.SmsOtp = SmsOtp;
//# sourceMappingURL=sms-otp.entity.js.map