"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressConstraint = exports.PasswordConstraint = exports.FullNameConstraint = exports.IdentityIDConstraint = void 0;
const class_validator_1 = require("class-validator");
let IdentityIDConstraint = class IdentityIDConstraint {
    async validate(identityID) {
        if ((0, class_validator_1.isNotEmpty)(identityID)) {
            if (identityID.length > 9 || identityID.length < 5) {
                return false;
            }
            identityID =
                identityID.length < 9
                    ? ('00000000' + identityID).slice(-9)
                    : identityID;
            return (Array.from(identityID, Number).reduce((counter, digit, i) => {
                const step = digit * ((i % 2) + 1);
                return counter + (step > 9 ? step - 9 : step);
            }) %
                10 ===
                0);
        }
        return true;
    }
    defaultMessage(validationArguments) {
        return String(` Israeli ID:{${validationArguments.value}} invaild `);
    }
};
IdentityIDConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)()
], IdentityIDConstraint);
exports.IdentityIDConstraint = IdentityIDConstraint;
let FullNameConstraint = class FullNameConstraint {
    async validate(fullName) {
        if ((fullName === null || fullName === void 0 ? void 0 : fullName.split(' ').length) < 2 && fullName)
            return false;
        return true;
    }
};
FullNameConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)()
], FullNameConstraint);
exports.FullNameConstraint = FullNameConstraint;
let PasswordConstraint = class PasswordConstraint {
    async validate(password) {
        if ((password === null || password === void 0 ? void 0 : password.length) < 6 && password)
            return false;
        return true;
    }
};
PasswordConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)()
], PasswordConstraint);
exports.PasswordConstraint = PasswordConstraint;
let AddressConstraint = class AddressConstraint {
    async validate(address) {
        if (((address === null || address === void 0 ? void 0 : address.length) < 6 && address) ||
            ((address === null || address === void 0 ? void 0 : address.split(' ').length) < 2 && address))
            return false;
        return true;
    }
};
AddressConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)()
], AddressConstraint);
exports.AddressConstraint = AddressConstraint;
//# sourceMappingURL=register.validation.js.map