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
exports.BankTransferDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class BankTransferDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'userId',
        example: '620e0ae39f318b1d4f5246db',
    }),
    __metadata("design:type", String)
], BankTransferDTO.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'accountNumber',
        example: '02868667302',
    }),
    __metadata("design:type", String)
], BankTransferDTO.prototype, "accountNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'branchNumber',
        example: 'branchNumber',
    }),
    __metadata("design:type", String)
], BankTransferDTO.prototype, "branchNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'bankName',
        example: 'TP Bank',
    }),
    __metadata("design:type", String)
], BankTransferDTO.prototype, "bankName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'amount',
        example: '300',
    }),
    __metadata("design:type", Number)
], BankTransferDTO.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'invoiceFileUrl',
        example: 'image/invoices/abc.xyz',
    }),
    __metadata("design:type", String)
], BankTransferDTO.prototype, "invoiceFileUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'transferDate',
        example: 'DD/mm/YYYY HH:mm:ss',
    }),
    __metadata("design:type", Date)
], BankTransferDTO.prototype, "transferDate", void 0);
exports.BankTransferDTO = BankTransferDTO;
//# sourceMappingURL=bank-transfer.dto.js.map