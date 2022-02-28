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
exports.Timer = exports.Event = exports.EventTypes = void 0;
const class_transformer_1 = require("class-transformer");
const users_entity_1 = require("../../users/entities/users.entity");
const typeorm_1 = require("typeorm");
var EventTypes;
(function (EventTypes) {
    EventTypes["START"] = "start";
    EventTypes["STOP"] = "stop";
    EventTypes["CONTINUE"] = "continue";
    EventTypes["END"] = "end";
})(EventTypes = exports.EventTypes || (exports.EventTypes = {}));
class Event {
}
exports.Event = Event;
let Timer = class Timer {
    constructor(partial) {
        Object.assign(this, partial);
    }
    get date() {
        const date = new Date((typeof this.createdAt === 'string'
            ? new Date(this.createdAt)
            : this.createdAt).toLocaleString('en-US', { timeZone: 'Israel' }));
        const getMonth = Number(date.getMonth()) + 1;
        return date.getFullYear() + '-' + getMonth + '-' + date.getDate();
    }
};
__decorate([
    (0, typeorm_1.ObjectIdColumn)({ name: '_id' }),
    __metadata("design:type", String)
], Timer.prototype, "_id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Timer.prototype, "date", null);
__decorate([
    (0, typeorm_1.Column)({ type: 'array' }),
    __metadata("design:type", Array)
], Timer.prototype, "events", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Timer.prototype, "hours", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Timer.prototype, "overime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Timer.prototype, "break", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.User),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", String)
], Timer.prototype, "userId", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Timer.prototype, "createdAt", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Timer.prototype, "updatedAt", void 0);
Timer = __decorate([
    (0, typeorm_1.Entity)('timers'),
    __metadata("design:paramtypes", [Object])
], Timer);
exports.Timer = Timer;
//# sourceMappingURL=timer.entity.js.map