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
exports.TimersController = void 0;
const common_1 = require("@nestjs/common");
const timers_service_1 = require("./timers.service");
const create_timer_dto_1 = require("./dto/create-timer.dto");
const swagger_1 = require("@nestjs/swagger");
const mongodb_1 = require("mongodb");
let TimersController = class TimersController {
    constructor(timersService) {
        this.timersService = timersService;
    }
    create(createTimerDto) {
        return this.timersService.create(createTimerDto);
    }
    findAll() {
        return this.timersService.findAll();
    }
    findOne(id) {
        return this.timersService.findOne({ _id: (0, mongodb_1.ObjectId)(id) });
    }
    update(userId) {
        return this.timersService.update(userId);
    }
    remove(id) {
        return this.timersService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_timer_dto_1.CreateTimerDto]),
    __metadata("design:returntype", void 0)
], TimersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TimersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TimersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TimersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TimersController.prototype, "remove", null);
TimersController = __decorate([
    (0, swagger_1.ApiTags)('Timer'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.Controller)('timers'),
    __metadata("design:paramtypes", [timers_service_1.TimersService])
], TimersController);
exports.TimersController = TimersController;
//# sourceMappingURL=timers.controller.js.map