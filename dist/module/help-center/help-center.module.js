"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpCenterModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const help_center_entity_1 = require("./entity/help-center.entity");
const help_center_controller_1 = require("./help-center.controller");
const help_center_service_1 = require("./help-center.service");
let HelpCenterModule = class HelpCenterModule {
};
HelpCenterModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([help_center_entity_1.HelpCenterEntity])],
        controllers: [help_center_controller_1.HelpCenterController],
        providers: [help_center_service_1.HelpCenterService],
    })
], HelpCenterModule);
exports.HelpCenterModule = HelpCenterModule;
//# sourceMappingURL=help-center.module.js.map