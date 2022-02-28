import { VerifyType } from 'src/module/users/entities/users.entity';
export declare class BankDetails {
    AccountNumber: string;
    BranchNumber: string;
    AccountOwnerName: string;
    Bank: string;
}
export declare enum FieldNameOfFileType {
    URLTaxCoordinations = "URLTaxCoordinations",
    URLSocialSecurityCoordinations = "URLSocialSecurityCoordinations",
    URLApprovalOfIllness = "URLApprovalOfIllness",
    URLReleasePapers = "URLReleasePapers",
    URLDisabilityApproval = "URLDisabilityApproval",
    URLMilitaryWorkPermit = "URLMilitaryWorkPermit",
    URLAdditionalDocuments = "URLAdditionalDocuments"
}
export declare class Payment {
    constructor(partial: Partial<Payment>);
    _id: string;
    BankDetails: BankDetails;
    BankDetailsVerify: VerifyType;
    InvoiceName: string;
    InvoiceNameVerify: VerifyType;
    userId: string;
    URLTaxCoordinations: Array<string>;
    URLTaxCoordinationsVerify: VerifyType;
    URLSocialSecurityCoordinations: Array<string>;
    URLSocialSecurityCoordinationsVerify: VerifyType;
    URLApprovalOfIllness: Array<string>;
    URLApprovalOfIllnessVerify: VerifyType;
    URLReleasePapers: string;
    URLReleasePapersVerify: VerifyType;
    URLDisabilityApproval: string;
    URLDisabilityApprovalVerify: VerifyType;
    URLMilitaryWorkPermit: string;
    URLMilitaryWorkPermitVerify: VerifyType;
    URLAdditionalDocuments: string;
    URLAdditionalDocumentsVerify: VerifyType;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
