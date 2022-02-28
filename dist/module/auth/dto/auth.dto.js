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
exports.VerifyOtpDto = exports.ForgotPasswordDto = exports.RegisterDto = exports.LoginDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const users_entity_1 = require("../../users/entities/users.entity");
const register_validation_1 = require("../../../validation/register.validation");
class LoginDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Personal ID',
        example: '',
    }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Validate)(register_validation_1.IdentityIDConstraint),
    __metadata("design:type", String)
], LoginDto.prototype, "personalID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Password',
        example: '',
    }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Validate)(register_validation_1.PasswordConstraint, {
        message: 'Constraint password 6 words minimum',
    }),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
exports.LoginDto = LoginDto;
class RegisterDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Identity Card',
        example: '053605416',
    }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Validate)(register_validation_1.IdentityIDConstraint, { message: 'Israeli ID  invaild ' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "identityID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Email',
        example: 'example@just.engineer.com',
    }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Transform)(({ value }) => value.trim()),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'emailVerify',
        example: users_entity_1.VerifyType.APPROVALED,
    }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsEnum)(users_entity_1.VerifyType),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "emailVerify", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Full name',
        example: 'Donlar Tump',
    }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Validate)(register_validation_1.FullNameConstraint, {
        message: 'Constraint full name 2 words minimum',
    }),
    __metadata("design:type", String)
], RegisterDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'fullNameVerify',
        example: users_entity_1.VerifyType.APPROVALED,
    }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsEnum)(users_entity_1.VerifyType),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "fullNameVerify", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Password',
        example: '123456',
    }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Validate)(register_validation_1.PasswordConstraint, {
        message: 'Constraint password 6 words minimum',
    }),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Country Code',
        example: '+84',
    }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Transform)(({ value }) => value.trim()),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "countryCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Phone number',
        example: '0964816123',
    }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Transform)(({ value }) => value.trim()),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Address',
        example: '',
    }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Transform)(({ value }) => value.trim()),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Validate)(register_validation_1.AddressConstraint, {
        message: 'Constraint address 2 words and 6 characters',
    }),
    __metadata("design:type", String)
], RegisterDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Country',
        example: 'Viet Nam',
    }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Transform)(({ value }) => value.trim()),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Company',
        example: '',
    }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Transform)(({ value }) => value.trim()),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "company", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'CompanyVerify',
        example: users_entity_1.VerifyType.APPROVALED,
    }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsEnum)(users_entity_1.VerifyType),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "companyVerify", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'role',
        example: users_entity_1.UserType.FREELANCER,
    }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(users_entity_1.UserType),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'URLPersonalAccidentsInsuranceVerify',
        example: users_entity_1.VerifyType.APPROVALED,
    }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(users_entity_1.VerifyType),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "URLPersonalAccidentsInsuranceVerify", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'URLInsurancePolicyVerify',
        example: users_entity_1.VerifyType.APPROVALED,
    }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(users_entity_1.VerifyType),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "URLInsurancePolicyVerify", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'URLPensionPolicyVerify',
        example: users_entity_1.VerifyType.APPROVALED,
    }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(users_entity_1.VerifyType),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "URLPensionPolicyVerify", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'URLDrivingLicenseVerify',
        example: users_entity_1.VerifyType.APPROVALED,
    }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(users_entity_1.VerifyType),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "URLDrivingLicenseVerify", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'URLLifeInsuranceVerify',
        example: users_entity_1.VerifyType.APPROVALED,
    }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(users_entity_1.VerifyType),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "URLLifeInsuranceVerify", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'URLLifeInsuranceVerify',
        example: users_entity_1.VerifyType.APPROVALED,
    }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(users_entity_1.VerifyType),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "URLHealthInsuranceVerify", void 0);
exports.RegisterDto = RegisterDto;
class ForgotPasswordDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Personal ID',
        example: '',
    }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Validate)(register_validation_1.IdentityIDConstraint),
    __metadata("design:type", String)
], ForgotPasswordDto.prototype, "personalID", void 0);
exports.ForgotPasswordDto = ForgotPasswordDto;
class VerifyOtpDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'OTP',
        example: '',
    }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], VerifyOtpDto.prototype, "OTP", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'smsId',
        example: '',
    }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], VerifyOtpDto.prototype, "smsId", void 0);
exports.VerifyOtpDto = VerifyOtpDto;
//# sourceMappingURL=auth.dto.js.map