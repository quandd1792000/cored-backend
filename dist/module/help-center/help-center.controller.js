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
exports.HelpCenterController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const help_center_dto_1 = require("./dto/help-center.dto");
const help_center_service_1 = require("./help-center.service");
const mongodb_1 = require("mongodb");
let HelpCenterController = class HelpCenterController {
    constructor(helpCenterService) {
        this.helpCenterService = helpCenterService;
    }
    async findAll() {
        const helpReqLst = await this.helpCenterService.findAllReq();
        return helpReqLst;
    }
    async findOne(id) {
        const helpReq = await this.helpCenterService.findHelpReq({
            _id: (0, mongodb_1.ObjectId)(id),
        });
        return helpReq;
    }
    async update(id, helpCenterDto) {
        const helpReq = await this.helpCenterService.updateHelpReq(id, helpCenterDto);
        return helpReq;
    }
    async create(helpCenterDto) {
        const helpReq = await this.helpCenterService.createHelpReq(helpCenterDto);
        return helpReq;
    }
    async delete(id) {
        const helpReq = await this.helpCenterService.removeHelpReq(id);
        return helpReq;
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HelpCenterController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HelpCenterController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, help_center_dto_1.HelpCenterDTO]),
    __metadata("design:returntype", Promise)
], HelpCenterController.prototype, "update", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [help_center_dto_1.HelpCenterDTO]),
    __metadata("design:returntype", Promise)
], HelpCenterController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HelpCenterController.prototype, "delete", null);
HelpCenterController = __decorate([
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, swagger_1.ApiTags)('Help Center'),
    (0, common_1.Controller)('help-center'),
    __metadata("design:paramtypes", [help_center_service_1.HelpCenterService])
], HelpCenterController);
exports.HelpCenterController = HelpCenterController;
//# sourceMappingURL=help-center.controller.js.map