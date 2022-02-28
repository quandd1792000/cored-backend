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
exports.UpdateUserDto = exports.FieldNoApproval = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const users_entity_1 = require("../entities/users.entity");
const register_validation_1 = require("../../../validation/register.validation");
var FieldNoApproval;
(function (FieldNoApproval) {
    FieldNoApproval["password"] = "password";
    FieldNoApproval["language"] = "language";
    FieldNoApproval["identityID"] = "identityID";
    FieldNoApproval["phone"] = "phone";
    FieldNoApproval["countryCode"] = "countryCode";
})(FieldNoApproval = exports.FieldNoApproval || (exports.FieldNoApproval = {}));
class UpdateUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Email',
        example: 'example@just.engineer.com',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Full name',
        example: 'Donlar Tump',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Validate)(register_validation_1.FullNameConstraint, {
        message: 'Constraint full name 2 words minimum',
    }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Password',
        example: '123456',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Validate)(register_validation_1.PasswordConstraint, {
        message: 'Constraint password 6 words minimum',
    }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Country Code',
        example: '+84',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "countryCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Phone number',
        example: '0964816123',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Language',
        example: '',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "language", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'identity ID',
        example: '',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Validate)(register_validation_1.IdentityIDConstraint, { message: 'Israeli ID  invaild ' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "identityID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Company',
        example: '',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "company", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "workFor", void 0);
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=update-user.dto.js.map