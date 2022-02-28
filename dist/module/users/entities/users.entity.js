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
exports.User = exports.FieldNameOfFileType = exports.VerifyType = exports.UserType = exports.LanguageType = void 0;
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
var LanguageType;
(function (LanguageType) {
    LanguageType["HEBREW"] = "Hebrew";
    LanguageType["ENGLISH"] = "English";
})(LanguageType = exports.LanguageType || (exports.LanguageType = {}));
var UserType;
(function (UserType) {
    UserType["FREELANCER"] = "freelancer";
    UserType["DELIVERY"] = "delivery";
})(UserType = exports.UserType || (exports.UserType = {}));
var VerifyType;
(function (VerifyType) {
    VerifyType["INVALID"] = "invalid";
    VerifyType["PENDING"] = "pending";
    VerifyType["APPROVALED"] = "approvaled";
})(VerifyType = exports.VerifyType || (exports.VerifyType = {}));
var FieldNameOfFileType;
(function (FieldNameOfFileType) {
    FieldNameOfFileType["URLPersonalAccidentsInsurance"] = "URLPersonalAccidentsInsurance";
    FieldNameOfFileType["URLIdentityCard"] = "URLIdentityCard";
    FieldNameOfFileType["URLform101"] = "URLform101";
    FieldNameOfFileType["URLHiringContract"] = "URLHiringContract";
    FieldNameOfFileType["URLInsurancePolicy"] = "URLInsurancePolicy";
    FieldNameOfFileType["URLCarLicense"] = "URLCarLicense";
    FieldNameOfFileType["URLDrivingLicense"] = "URLDrivingLicense";
    FieldNameOfFileType["URLHealthInsurance"] = "URLHealthInsurance";
    FieldNameOfFileType["URLLifeInsurance"] = "URLLifeInsurance";
    FieldNameOfFileType["URLPensionPolicy"] = "URLPensionPolicy";
})(FieldNameOfFileType = exports.FieldNameOfFileType || (exports.FieldNameOfFileType = {}));
let User = class User {
    constructor(partial) {
        Object.assign(this, partial);
    }
};
__decorate([
    (0, typeorm_1.ObjectIdColumn)({ name: '_id' }),
    __metadata("design:type", String)
], User.prototype, "_id", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "fullName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: VerifyType, default: VerifyType.APPROVALED }),
    __metadata("design:type", String)
], User.prototype, "fullNameVerify", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', {
        enum: VerifyType,
        default: VerifyType.APPROVALED,
    }),
    __metadata("design:type", String)
], User.prototype, "emailVerify", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: UserType, default: UserType.FREELANCER }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: LanguageType, default: LanguageType.ENGLISH }),
    __metadata("design:type", String)
], User.prototype, "language", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], User.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], User.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        nullable: true,
        enum: VerifyType,
        default: VerifyType.APPROVALED,
    }),
    __metadata("design:type", String)
], User.prototype, "companyVerify", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], User.prototype, "identityID", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: 'hung' }),
    __metadata("design:type", String)
], User.prototype, "workFor", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "URLIdentityCard", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "URLform101", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "URLHiringContract", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "URLPersonalAccidentsInsurance", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        nullable: true,
        enum: VerifyType,
        default: VerifyType.APPROVALED,
    }),
    __metadata("design:type", String)
], User.prototype, "URLPersonalAccidentsInsuranceVerify", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "URLInsurancePolicy", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        nullable: true,
        enum: VerifyType,
        default: VerifyType.APPROVALED,
    }),
    __metadata("design:type", String)
], User.prototype, "URLInsurancePolicyVerify", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "URLCarLicense", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'simple-enum',
        enum: VerifyType,
        default: VerifyType.APPROVALED,
    }),
    __metadata("design:type", String)
], User.prototype, "URLCarLicenseVerify", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "URLPensionPolicy", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        nullable: true,
        enum: VerifyType,
        default: VerifyType.APPROVALED,
    }),
    __metadata("design:type", String)
], User.prototype, "URLPensionPolicyVerify", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "URLDrivingLicense", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        nullable: true,
        enum: VerifyType,
        default: VerifyType.APPROVALED,
    }),
    __metadata("design:type", String)
], User.prototype, "URLDrivingLicenseVerify", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "URLLifeInsurance", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        nullable: true,
        enum: VerifyType,
        default: VerifyType.APPROVALED,
    }),
    __metadata("design:type", String)
], User.prototype, "URLLifeInsuranceVerify", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "URLHealthInsurance", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        nullable: true,
        enum: VerifyType,
        default: VerifyType.APPROVALED,
    }),
    __metadata("design:type", String)
], User.prototype, "URLHealthInsuranceVerify", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], User.prototype, "deletedAt", void 0);
User = __decorate([
    (0, typeorm_1.Entity)('users'),
    __metadata("design:paramtypes", [Object])
], User);
exports.User = User;
//# sourceMappingURL=users.entity.js.map