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
exports.BankTransferService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bank_transfer_entity_1 = require("./entity/bank-transfer.entity");
const mongodb_1 = require("mongodb");
let BankTransferService = class BankTransferService {
    constructor(bankTransferRepository) {
        this.bankTransferRepository = bankTransferRepository;
    }
    async findAllBankTransfer() {
        const bankTransfer = await this.bankTransferRepository.find();
        if (bankTransfer) {
            bankTransfer.forEach((Element) => {
                Element._id = Element._id.toString();
            });
            return bankTransfer;
        }
        else {
            return null;
        }
    }
    async updateBankTransfer(id, updateData) {
        await this.bankTransferRepository.update(id, updateData);
        return await this.bankTransferRepository.findOne({
            _id: (0, mongodb_1.ObjectId)(id),
        });
    }
    async createBankTransfer(data) {
        const bankTransfer = this.bankTransferRepository.create(data);
        await this.bankTransferRepository.save(data);
        return bankTransfer;
    }
    async findBankTransfer(Query) {
        const bankTransfer = await this.bankTransferRepository.findOne(Query);
        if (bankTransfer) {
            bankTransfer._id = bankTransfer._id.toString();
            return bankTransfer;
        }
        else {
            return null;
        }
    }
    async removeBankTransfer(id) {
        const bankTransfer = await this.bankTransferRepository.delete(id);
        return bankTransfer;
    }
};
BankTransferService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bank_transfer_entity_1.BankTransferEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BankTransferService);
exports.BankTransferService = BankTransferService;
//# sourceMappingURL=bank-transfer.service.js.map