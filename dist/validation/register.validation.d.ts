import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
export declare class IdentityIDConstraint implements ValidatorConstraintInterface {
    validate(identityID: string): Promise<boolean>;
    defaultMessage(validationArguments?: ValidationArguments): string;
}
export declare class FullNameConstraint implements ValidatorConstraintInterface {
    validate(fullName: string): Promise<boolean>;
}
export declare class PasswordConstraint implements ValidatorConstraintInterface {
    validate(password: string): Promise<boolean>;
}
export declare class AddressConstraint implements ValidatorConstraintInterface {
    validate(address: string): Promise<boolean>;
}
