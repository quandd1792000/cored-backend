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
exports.TimersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const timer_entity_1 = require("./entities/timer.entity");
let TimersService = class TimersService {
    constructor(timerRepository) {
        this.timerRepository = timerRepository;
    }
    async create(createTimerDto) {
        const timer = await this.timerRepository.create(createTimerDto);
        const save = await this.timerRepository.save(timer);
        return await this.findOne({ _id: save._id });
    }
    findAll() {
        return this.timerRepository.find();
    }
    async findOne(query) {
        const timer = await this.timerRepository.findOne({ where: query });
        if (timer) {
            timer._id = timer._id.toString();
            return timer;
        }
        return null;
    }
    async update(userId) {
        const timer = await this.timerRepository.find({ userId });
        if (timer) {
            timer.forEach((Element) => {
                Element._id = Element._id.toString();
            });
            return timer;
        }
        else
            return null;
    }
    remove(id) {
        return `This action removes a #${id} timer`;
    }
};
TimersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(timer_entity_1.Timer)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TimersService);
exports.TimersService = TimersService;
//# sourceMappingURL=timers.service.js.map