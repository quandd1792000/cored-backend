"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermOfServiceModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const term_of_service_entity_1 = require("./entity/term-of-service.entity");
const term_of_service_controller_1 = require("./term-of-service.controller");
const term_of_service_service_1 = require("./term-of-service.service");
let TermOfServiceModule = class TermOfServiceModule {
};
TermOfServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([term_of_service_entity_1.TermOfServiceEntity])],
        controllers: [term_of_service_controller_1.TermOfServiceController],
        providers: [term_of_service_service_1.TermOfServiceService],
    })
], TermOfServiceModule);
exports.TermOfServiceModule = TermOfServiceModule;
//# sourceMappingURL=term-of-service.module.js.map