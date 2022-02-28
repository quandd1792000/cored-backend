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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpCenterEntity = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
let HelpCenterEntity = class HelpCenterEntity {
    constructor(partial) {
        Object.assign(this, partial);
    }
};
__decorate([
    (0, typeorm_1.ObjectIdColumn)({ name: '_id' }),
    __metadata("design:type", String)
], HelpCenterEntity.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HelpCenterEntity.prototype, "phonenumber", void 0);
__decorate([
    (0, class_validator_1.MinLength)(5),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HelpCenterEntity.prototype, "content", void 0);
HelpCenterEntity = __decorate([
    (0, typeorm_1.Entity)('help_requests'),
    __metadata("design:paramtypes", [Object])
], HelpCenterEntity);
exports.HelpCenterEntity = HelpCenterEntity;
//# sourceMappingURL=help-center.entity.js.map