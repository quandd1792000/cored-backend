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
exports.PaymentsController = void 0;
const common_1 = require("@nestjs/common");
const payments_service_1 = require("./payments.service");
const swagger_1 = require("@nestjs/swagger");
const public_decorator_1 = require("../../decorators/public.decorator");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const payment_entity_1 = require("./entities/payment.entity");
const fs = require("fs");
const uuid_1 = require("uuid");
const mongodb_1 = require("mongodb");
let PaymentsController = class PaymentsController {
    constructor(paymentsService) {
        this.paymentsService = paymentsService;
    }
    async uploadFiles(id, files) {
        return await this.paymentsService.uploadsPayment(id, files);
    }
    findAll() {
        return this.paymentsService.findAll();
    }
    findOne(req) {
        return this.paymentsService.findOne({ userId: (0, mongodb_1.ObjectId)(req.user._id) });
    }
    remove(id) {
        return this.paymentsService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Patch)('/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: payment_entity_1.FieldNameOfFileType.URLTaxCoordinations },
        { name: payment_entity_1.FieldNameOfFileType.URLSocialSecurityCoordinations },
        { name: payment_entity_1.FieldNameOfFileType.URLApprovalOfIllness },
        { name: payment_entity_1.FieldNameOfFileType.URLReleasePapers, maxCount: 1 },
        { name: payment_entity_1.FieldNameOfFileType.URLDisabilityApproval, maxCount: 1 },
        { name: payment_entity_1.FieldNameOfFileType.URLMilitaryWorkPermit, maxCount: 1 },
        { name: payment_entity_1.FieldNameOfFileType.URLAdditionalDocuments },
    ], {
        storage: (0, multer_1.diskStorage)({
            destination: (req, file, cb) => {
                fs.mkdirSync(process.env.PATH_PAYMENT + file.fieldname, {
                    recursive: true,
                });
                cb(null, process.env.PATH_PAYMENT + file.fieldname + '/');
            },
            filename: (req, files, cb) => {
                const filename = (0, uuid_1.v4)();
                cb(null, `${filename}.png`);
            },
        }),
    })),
    (0, public_decorator_1.Public)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PaymentsController.prototype, "uploadFiles", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('me'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "remove", null);
PaymentsController = __decorate([
    (0, swagger_1.ApiTags)('Payments'),
    (0, common_1.Controller)('payments'),
    __metadata("design:paramtypes", [payments_service_1.PaymentsService])
], PaymentsController);
exports.PaymentsController = PaymentsController;
//# sourceMappingURL=payments.controller.js.map