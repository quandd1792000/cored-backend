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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
const class_validator_1 = require("class-validator");
const mongodb_1 = require("mongodb");
const sms_otp_service_1 = require("../sms-otp/sms-otp.service");
let AuthService = class AuthService {
    constructor(usersService, otpService, jwt) {
        this.usersService = usersService;
        this.otpService = otpService;
        this.jwt = jwt;
        this.saltOrRounds = 10;
    }
    async generateJwtToken(payload) {
        return this.jwt.sign(payload);
    }
    async validateUser(IdentityCard, password) {
        const user = await this.usersService.findOne({ IdentityCard });
        if (user && this.checkPassword(password, user.password)) {
            const result = __rest(user, []);
            return result;
        }
        return null;
    }
    async validateUserByToken(id) {
        const user = await this.usersService.findOne({ _id: (0, mongodb_1.ObjectId)(id) });
        if (user) {
            return user;
        }
        return null;
    }
    async login(params) {
        const currentUser = await this.usersService.findOne({
            identityID: params.personalID,
        });
        if (!currentUser) {
            throw new common_1.UnprocessableEntityException(`Identity card don't exits`);
        }
        const passwordValid = await this.checkPassword(params.password, currentUser.password);
        if (!passwordValid) {
            throw new common_1.UnprocessableEntityException('Password failed');
        }
        const payload = {
            email: currentUser.email,
            phone: currentUser.phone,
            IdentityCard: currentUser.IdentityCard,
            _id: currentUser._id,
            sub: currentUser._id,
        };
        const accessToken = await this.generateJwtToken(payload);
        currentUser.accessToken = accessToken;
        return currentUser;
    }
    async register(params) {
        const checkIdentityCard = await this.usersService.findOne({
            identityID: params.identityID,
        });
        if (checkIdentityCard) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
                error: 'Identity card alredy exits',
            }, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        const phoneNumber = params.countryCode + params.phone;
        if (!(0, class_validator_1.isPhoneNumber)(phoneNumber)) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
                error: 'Phone number failed',
            }, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        const checkPhone = await this.usersService.findOne({
            phoneNumber: phoneNumber,
        });
        if (checkPhone) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
                error: 'Phone number alredy exits',
            }, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        params.password = await this.encryptionPassword(params.password);
        const user = Object.assign(Object.assign({}, params), { phoneNumber: phoneNumber });
        const result = await this.usersService.createUser(user);
        result._id = result._id.toString();
        result.accessTokens = await this.generateJwtToken({
            email: result.email,
            phone: result.phone,
            _id: result._id,
            sub: result._id,
        });
        return result;
    }
    async uploadFiles(userId, files) {
        const check = await this.usersService.findOne({ _id: (0, mongodb_1.ObjectId)(userId) });
        if (!check) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: `couldn't find user {id: ${userId}}`,
            }, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        await this.usersService.uploadFiles(userId, files);
        return await this.usersService.findOne({ _id: (0, mongodb_1.ObjectId)(userId) });
    }
    async encryptionPassword(password) {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    }
    async checkPassword(input, password) {
        return await bcrypt.compare(input, password);
    }
    async forgotPassword(inf) {
        const user = await this.usersService.findOne({
            identityID: inf.personalID,
        });
        if (!user) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
                error: `Identity card don't exits`,
            }, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        return await this.otpService.create();
    }
    async verifyOtp(inf) {
        const check = await this.otpService.findOne({ _id: (0, mongodb_1.ObjectId)(inf.smsId) });
        const now = Date.now();
        if (now > check.expires) {
            return { message: 'Timeout. Please try again' };
        }
        if (!(await bcrypt.compare(check.hash, inf.OTP))) {
            return { message: 'OTP failed' };
        }
        return { message: 'OK' };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        sms_otp_service_1.SmsOtpService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map