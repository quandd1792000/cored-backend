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
exports.HelpCenterService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const help_center_entity_1 = require("./entity/help-center.entity");
const mongodb_1 = require("mongodb");
let HelpCenterService = class HelpCenterService {
    constructor(helpReqRepository) {
        this.helpReqRepository = helpReqRepository;
    }
    async findAllReq() {
        const listHelpReq = await this.helpReqRepository.find();
        if (listHelpReq) {
            listHelpReq.forEach((Element) => {
                Element._id = Element._id.toString();
            });
            return listHelpReq;
        }
        else {
            return null;
        }
    }
    async updateHelpReq(id, updateData) {
        await this.helpReqRepository.update(id, updateData);
        return await this.helpReqRepository.findOne({
            _id: (0, mongodb_1.ObjectId)(id),
        });
    }
    async createHelpReq(data) {
        const helpRequest = this.helpReqRepository.create(data);
        await this.helpReqRepository.save(data);
        return helpRequest;
    }
    async findHelpReq(Query) {
        const helpRequest = await this.helpReqRepository.findOne(Query);
        if (helpRequest) {
            helpRequest._id = helpRequest._id.toString();
            return helpRequest;
        }
        else {
            return null;
        }
    }
    async removeHelpReq(id) {
        const helpReq = await this.helpReqRepository.delete(id);
        return helpReq;
    }
};
HelpCenterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(help_center_entity_1.HelpCenterEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HelpCenterService);
exports.HelpCenterService = HelpCenterService;
//# sourceMappingURL=help-center.service.js.map