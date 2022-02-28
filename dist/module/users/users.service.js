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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const users_entity_1 = require("./entities/users.entity");
const mongodb_1 = require("mongodb");
const update_user_dto_1 = require("./dto/update-user.dto");
const class_validator_1 = require("class-validator");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async findOne(query) {
        const user = await this.usersRepository.findOne({ where: query });
        if (user) {
            user._id = user._id.toString();
            return user;
        }
        return null;
    }
    async findAll() {
        return await this.usersRepository.find();
    }
    async createUser(createuser) {
        const creataUser = this.usersRepository.create(createuser);
        return await this.usersRepository.save(creataUser);
    }
    async updateUser(id, updateData) {
        await this.usersRepository.update(id, updateData);
        return await this.findOne({ _id: (0, mongodb_1.ObjectId)(id) });
    }
    async updateProfile(id, inf) {
        Object.keys(inf).reduce((total, currentValue) => {
            if (inf[currentValue] && !(0, class_validator_1.isEnum)(currentValue, update_user_dto_1.FieldNoApproval)) {
                inf[currentValue + 'Verify'] = users_entity_1.VerifyType.PENDING;
                return currentValue;
            }
            else if (!inf[currentValue]) {
                delete inf[currentValue];
            }
            return currentValue;
        }, 'start');
        return this.updateUser(id, inf);
    }
    async updatePathInProfile(userId, files) {
        const ObjUpdate = await this.uploadFiles(userId, files);
        return await this.updateProfile(userId, ObjUpdate);
    }
    async uploadFiles(userId, files) {
        const ObjUpdate = {};
        files.reduce((total, currentValue) => {
            if (!(0, class_validator_1.isEnum)(currentValue.fieldname, users_entity_1.FieldNameOfFileType)) {
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
                    error: `${currentValue.fieldname} failed field name of file`,
                }, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
            }
            ObjUpdate[currentValue.fieldname] = process.env.HOST + currentValue.path;
        }, 'start');
        await this.updateUser(userId, ObjUpdate);
        return ObjUpdate;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map