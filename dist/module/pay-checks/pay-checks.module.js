"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayChecksModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pay_checks_entity_1 = require("./entity/pay-checks.entity");
const pay_checks_controller_1 = require("./pay-checks.controller");
const pay_checks_service_1 = require("./pay-checks.service");
let PayChecksModule = class PayChecksModule {
};
PayChecksModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([pay_checks_entity_1.PayChecksEntity])],
        controllers: [pay_checks_controller_1.PayChecksController],
        providers: [pay_checks_service_1.PayChecksService],
    })
], PayChecksModule);
exports.PayChecksModule = PayChecksModule;
//# sourceMappingURL=pay-checks.module.js.map