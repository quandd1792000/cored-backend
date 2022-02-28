export declare enum LanguageType {
    HEBREW = "Hebrew",
    ENGLISH = "English"
}
export declare enum UserType {
    FREELANCER = "freelancer",
    DELIVERY = "delivery"
}
export declare enum VerifyType {
    INVALID = "invalid",
    PENDING = "pending",
    APPROVALED = "approvaled"
}
export declare enum FieldNameOfFileType {
    URLPersonalAccidentsInsurance = "URLPersonalAccidentsInsurance",
    URLIdentityCard = "URLIdentityCard",
    URLform101 = "URLform101",
    URLHiringContract = "URLHiringContract",
    URLInsurancePolicy = "URLInsurancePolicy",
    URLCarLicense = "URLCarLicense",
    URLDrivingLicense = "URLDrivingLicense",
    URLHealthInsurance = "URLHealthInsurance",
    URLLifeInsurance = "URLLifeInsurance",
    URLPensionPolicy = "URLPensionPolicy"
}
export declare class User {
    constructor(partial: Partial<User>);
    _id: string;
    password: string;
    fullName: string;
    fullNameVerify: string;
    address: string;
    phoneNumber: string;
    email: string;
    emailVerify: string;
    role: string;
    language: string;
    country: string;
    company: string;
    companyVerify: VerifyType;
    identityID: string;
    workFor: string;
    URLIdentityCard: string;
    URLform101: string;
    URLHiringContract: string;
    URLPersonalAccidentsInsurance: string;
    URLPersonalAccidentsInsuranceVerify: VerifyType;
    URLInsurancePolicy: string;
    URLInsurancePolicyVerify: VerifyType;
    URLCarLicense: string;
    URLCarLicenseVerify: VerifyType;
    URLPensionPolicy: string;
    URLPensionPolicyVerify: VerifyType;
    URLDrivingLicense: string;
    URLDrivingLicenseVerify: VerifyType;
    URLLifeInsurance: string;
    URLLifeInsuranceVerify: VerifyType;
    URLHealthInsurance: string;
    URLHealthInsuranceVerify: VerifyType;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
