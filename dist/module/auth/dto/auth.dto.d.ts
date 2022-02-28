import { CountryCode } from 'libphonenumber-js';
export declare class LoginDto {
    personalID: string;
    password: string;
}
export declare class RegisterDto {
    identityID: string;
    email: string;
    emailVerify: string;
    fullName: string;
    fullNameVerify: string;
    password: string;
    countryCode: CountryCode;
    phone: string;
    address: string;
    country: string;
    company: string;
    companyVerify: string;
    role: string;
    URLPersonalAccidentsInsuranceVerify: string;
    URLInsurancePolicyVerify: string;
    URLPensionPolicyVerify: string;
    URLDrivingLicenseVerify: string;
    URLLifeInsuranceVerify: string;
    URLHealthInsuranceVerify: string;
}
export declare class ForgotPasswordDto {
    personalID: string;
}
export declare class VerifyOtpDto {
    OTP: string;
    smsId: string;
}
