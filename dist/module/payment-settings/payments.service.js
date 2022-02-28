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
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const users_service_1 = require("../users/users.service");
const payment_entity_1 = require("./entities/payment.entity");
const mongodb_1 = require("mongodb");
const users_entity_1 = require("../users/entities/users.entity");
let PaymentsService = class PaymentsService {
    constructor(paymentRepository, usersService) {
        this.paymentRepository = paymentRepository;
        this.usersService = usersService;
    }
    async create(createPaymentDto) {
        const user = await this.usersService.findOne({
            _id: (0, mongodb_1.ObjectId)(createPaymentDto.userId),
        });
        if (!user) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: `Couldn't find user {id: ${createPaymentDto.userId}}`,
            }, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        const payment = this.paymentRepository.create(createPaymentDto);
        return this.paymentRepository.save(payment);
    }
    async updatePayment(id, inf) {
        Object.keys(inf).reduce((total, currentValue) => {
            inf[currentValue + 'Verify'] = users_entity_1.VerifyType.PENDING;
            return null;
        }, 'start');
        return this.update(id, inf);
    }
    async uploadsPayment(paymentId, files) {
        const updatePayment = {};
        Object.keys(files).reduce((total, currentValue) => {
            updatePayment[currentValue] = [
                ...new Set(files[currentValue].map((file) => file.path)),
            ];
            return null;
        }, 'start');
        return await this.updatePayment(paymentId, updatePayment);
    }
    findAll() {
        return `This action returns all payments`;
    }
    async findOne(query) {
        const payment = await this.paymentRepository.findOne({ where: query });
        if (payment) {
            payment._id = payment._id.toString();
            return payment;
        }
        return null;
    }
    async update(id, updatePaymentDto) {
        await this.paymentRepository.update(id, updatePaymentDto);
        return await this.findOne({ _id: (0, mongodb_1.ObjectId)(id) });
    }
    remove(id) {
        return `This action removes a #${id} payment`;
    }
};
PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(payment_entity_1.Payment)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService])
], PaymentsService);
exports.PaymentsService = PaymentsService;
//# sourceMappingURL=payments.service.js.map