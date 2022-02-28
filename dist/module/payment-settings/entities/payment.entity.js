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
exports.Payment = exports.FieldNameOfFileType = exports.BankDetails = void 0;
const users_entity_1 = require("../../users/entities/users.entity");
const typeorm_1 = require("typeorm");
class BankDetails {
}
exports.BankDetails = BankDetails;
var FieldNameOfFileType;
(function (FieldNameOfFileType) {
    FieldNameOfFileType["URLTaxCoordinations"] = "URLTaxCoordinations";
    FieldNameOfFileType["URLSocialSecurityCoordinations"] = "URLSocialSecurityCoordinations";
    FieldNameOfFileType["URLApprovalOfIllness"] = "URLApprovalOfIllness";
    FieldNameOfFileType["URLReleasePapers"] = "URLReleasePapers";
    FieldNameOfFileType["URLDisabilityApproval"] = "URLDisabilityApproval";
    FieldNameOfFileType["URLMilitaryWorkPermit"] = "URLMilitaryWorkPermit";
    FieldNameOfFileType["URLAdditionalDocuments"] = "URLAdditionalDocuments";
})(FieldNameOfFileType = exports.FieldNameOfFileType || (exports.FieldNameOfFileType = {}));
let Payment = class Payment {
    constructor(partial) {
        Object.assign(this, partial);
    }
};
__decorate([
    (0, typeorm_1.ObjectIdColumn)({ name: '_id' }),
    __metadata("design:type", String)
], Payment.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", BankDetails)
], Payment.prototype, "BankDetails", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        nullable: true,
        enum: users_entity_1.VerifyType,
        default: users_entity_1.VerifyType.APPROVALED,
    }),
    __metadata("design:type", String)
], Payment.prototype, "BankDetailsVerify", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Payment.prototype, "InvoiceName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        nullable: true,
        enum: users_entity_1.VerifyType,
        default: users_entity_1.VerifyType.APPROVALED,
    }),
    __metadata("design:type", String)
], Payment.prototype, "InvoiceNameVerify", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Payment.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'array' }),
    __metadata("design:type", Array)
], Payment.prototype, "URLTaxCoordinations", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        nullable: true,
        enum: users_entity_1.VerifyType,
        default: users_entity_1.VerifyType.APPROVALED,
    }),
    __metadata("design:type", String)
], Payment.prototype, "URLTaxCoordinationsVerify", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'array' }),
    __metadata("design:type", Array)
], Payment.prototype, "URLSocialSecurityCoordinations", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        nullable: true,
        enum: users_entity_1.VerifyType,
        default: users_entity_1.VerifyType.APPROVALED,
    }),
    __metadata("design:type", String)
], Payment.prototype, "URLSocialSecurityCoordinationsVerify", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'array' }),
    __metadata("design:type", Array)
], Payment.prototype, "URLApprovalOfIllness", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        nullable: true,
        enum: users_entity_1.VerifyType,
        default: users_entity_1.VerifyType.APPROVALED,
    }),
    __metadata("design:type", String)
], Payment.prototype, "URLApprovalOfIllnessVerify", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'longtext', nullable: true, length: 500 }),
    __metadata("design:type", String)
], Payment.prototype, "URLReleasePapers", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        nullable: true,
        enum: users_entity_1.VerifyType,
        default: users_entity_1.VerifyType.APPROVALED,
    }),
    __metadata("design:type", String)
], Payment.prototype, "URLReleasePapersVerify", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'longtext', nullable: true, length: 500 }),
    __metadata("design:type", String)
], Payment.prototype, "URLDisabilityApproval", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        nullable: true,
        enum: users_entity_1.VerifyType,
        default: users_entity_1.VerifyType.APPROVALED,
    }),
    __metadata("design:type", String)
], Payment.prototype, "URLDisabilityApprovalVerify", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'longtext', nullable: true, length: 500 }),
    __metadata("design:type", String)
], Payment.prototype, "URLMilitaryWorkPermit", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        nullable: true,
        enum: users_entity_1.VerifyType,
        default: users_entity_1.VerifyType.APPROVALED,
    }),
    __metadata("design:type", String)
], Payment.prototype, "URLMilitaryWorkPermitVerify", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'longtext', nullable: true, length: 500 }),
    __metadata("design:type", String)
], Payment.prototype, "URLAdditionalDocuments", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        nullable: true,
        enum: users_entity_1.VerifyType,
        default: users_entity_1.VerifyType.APPROVALED,
    }),
    __metadata("design:type", String)
], Payment.prototype, "URLAdditionalDocumentsVerify", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Payment.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Payment.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Payment.prototype, "deletedAt", void 0);
Payment = __decorate([
    (0, typeorm_1.Entity)('payment_settings'),
    __metadata("design:paramtypes", [Object])
], Payment);
exports.Payment = Payment;
//# sourceMappingURL=payment.entity.js.map