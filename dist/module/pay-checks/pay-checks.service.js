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
exports.PayChecksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pay_checks_entity_1 = require("./entity/pay-checks.entity");
const mongodb_1 = require("mongodb");
let PayChecksService = class PayChecksService {
    constructor(paychecksRepo) {
        this.paychecksRepo = paychecksRepo;
    }
    async findAllPayChecks() {
        const payChecks = await this.paychecksRepo.find();
        if (payChecks) {
            payChecks.forEach((Element) => {
                Element._id = Element._id.toString();
            });
            return payChecks;
        }
        else {
            return null;
        }
    }
    async createPayCheck(data) {
        const payCheck = this.paychecksRepo.create(data);
        await this.paychecksRepo.save(data);
        return payCheck;
    }
    async findPayCheck(Query) {
        const payCheck = await this.paychecksRepo.findOne(Query);
        if (payCheck) {
            payCheck._id = payCheck._id.toString();
        }
        else {
            return null;
        }
        return payCheck;
    }
    async updatePaycheck(id, updateData) {
        await this.paychecksRepo.update(id, updateData);
        return await this.paychecksRepo.findOne({
            _id: (0, mongodb_1.ObjectId)(id),
        });
    }
    async removePayCheck(id) {
        const payCheck = await this.paychecksRepo.delete(id);
        return payCheck;
    }
};
PayChecksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pay_checks_entity_1.PayChecksEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PayChecksService);
exports.PayChecksService = PayChecksService;
//# sourceMappingURL=pay-checks.service.js.map