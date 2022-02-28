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
exports.PayChecksDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class PayChecksDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'userId',
        example: '620e0ae39f318b1d4f5246db',
    }),
    __metadata("design:type", String)
], PayChecksDTO.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'date',
        example: 'dd/MM/yyyy HH:mm:ss',
    }),
    __metadata("design:type", Date)
], PayChecksDTO.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'file_name',
        example: 'image',
    }),
    __metadata("design:type", String)
], PayChecksDTO.prototype, "file_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'file_url',
        example: 'C:/User/paycheck/images',
    }),
    __metadata("design:type", String)
], PayChecksDTO.prototype, "file_url", void 0);
exports.PayChecksDTO = PayChecksDTO;
//# sourceMappingURL=pay-checks.dto.js.map