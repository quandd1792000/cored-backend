"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankTransferModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bank_transfer_controller_1 = require("./bank-transfer.controller");
const bank_transfer_service_1 = require("./bank-transfer.service");
const bank_transfer_entity_1 = require("./entity/bank-transfer.entity");
let BankTransferModule = class BankTransferModule {
};
BankTransferModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([bank_transfer_entity_1.BankTransferEntity])],
        controllers: [bank_transfer_controller_1.BankTransferController],
        providers: [bank_transfer_service_1.BankTransferService],
    })
], BankTransferModule);
exports.BankTransferModule = BankTransferModule;
//# sourceMappingURL=bank-transfer.module.js.map