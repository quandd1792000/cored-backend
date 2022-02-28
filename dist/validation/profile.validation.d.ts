import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
export declare class UrlConstraint implements ValidatorConstraintInterface {
    validate(url: string, args: ValidationArguments): Promise<boolean>;
    defaultMessage(validationArguments?: ValidationArguments): string;
}
