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
exports.TermOfServiceController = void 0;
const common_1 = require("@nestjs/common");
const term_of_service_dto_1 = require("./dto/term-of-service.dto");
const term_of_service_service_1 = require("./term-of-service.service");
const mongodb_1 = require("mongodb");
const swagger_1 = require("@nestjs/swagger");
let TermOfServiceController = class TermOfServiceController {
    constructor(termOfServiceService) {
        this.termOfServiceService = termOfServiceService;
    }
    async findAll() {
        const termOfServices = await this.termOfServiceService.findAllTermOfService();
        return termOfServices;
    }
    async findOne(id) {
        const termOfService = await this.termOfServiceService.findTermOfService({
            _id: (0, mongodb_1.ObjectId)(id),
        });
        return termOfService;
    }
    async create(termOfServiceDto) {
        const termOfService = await this.termOfServiceService.createTermOfService(termOfServiceDto);
        return termOfService;
    }
    async update(id, termOfServiceDto) {
        const termOfService = await this.termOfServiceService.updateTermOfService(id, termOfServiceDto);
        return termOfService;
    }
    async delete(id) {
        const termOfService = await this.termOfServiceService.removeTermOfService(id);
        return termOfService;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TermOfServiceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TermOfServiceController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [term_of_service_dto_1.TermOfServiceDTO]),
    __metadata("design:returntype", Promise)
], TermOfServiceController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, term_of_service_dto_1.TermOfServiceDTO]),
    __metadata("design:returntype", Promise)
], TermOfServiceController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TermOfServiceController.prototype, "delete", null);
TermOfServiceController = __decorate([
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, swagger_1.ApiTags)('Term of service'),
    (0, common_1.Controller)('term-of-service'),
    __metadata("design:paramtypes", [term_of_service_service_1.TermOfServiceService])
], TermOfServiceController);
exports.TermOfServiceController = TermOfServiceController;
//# sourceMappingURL=term-of-service.controller.js.map