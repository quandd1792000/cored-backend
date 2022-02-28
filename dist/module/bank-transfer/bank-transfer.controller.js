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
exports.BankTransferController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const mongodb_1 = require("mongodb");
const bank_transfer_service_1 = require("./bank-transfer.service");
const bank_transfer_dto_1 = require("./dto/bank-transfer.dto");
let BankTransferController = class BankTransferController {
    constructor(bankTransferService) {
        this.bankTransferService = bankTransferService;
    }
    async findAll() {
        const bankTransfer = await this.bankTransferService.findAllBankTransfer();
        return bankTransfer;
    }
    async findOne(id) {
        const bankTransfer = await this.bankTransferService.findBankTransfer({
            _id: (0, mongodb_1.ObjectId)(id),
        });
        return bankTransfer;
    }
    async create(bankTransferDTO) {
        const bankTransfer = await this.bankTransferService.createBankTransfer(bankTransferDTO);
        return bankTransfer;
    }
    async update(id, bankTransferDTO) {
        const bankTransfer = await this.bankTransferService.updateBankTransfer(id, bankTransferDTO);
        return bankTransfer;
    }
    async delete(id) {
        const bankTransfer = await this.bankTransferService.removeBankTransfer(id);
        return bankTransfer;
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BankTransferController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BankTransferController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bank_transfer_dto_1.BankTransferDTO]),
    __metadata("design:returntype", Promise)
], BankTransferController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, bank_transfer_dto_1.BankTransferDTO]),
    __metadata("design:returntype", Promise)
], BankTransferController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BankTransferController.prototype, "delete", null);
BankTransferController = __decorate([
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, swagger_1.ApiTags)('Bank Transfer'),
    (0, common_1.Controller)('bank-transfer'),
    __metadata("design:paramtypes", [bank_transfer_service_1.BankTransferService])
], BankTransferController);
exports.BankTransferController = BankTransferController;
//# sourceMappingURL=bank-transfer.controller.js.map