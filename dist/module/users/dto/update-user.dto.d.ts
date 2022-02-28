import { LanguageType } from 'src/module/users/entities/users.entity';
import { CountryCode } from 'libphonenumber-js';
export declare enum FieldNoApproval {
    password = "password",
    language = "language",
    identityID = "identityID",
    phone = "phone",
    countryCode = "countryCode"
}
export declare class UpdateUserDto {
    email: string;
    fullName?: string;
    password: string;
    countryCode: CountryCode;
    phone: string;
    language: LanguageType;
    identityID: string;
    company: string;
    workFor: string;
}
