import { BankDetails } from '../entities/payment.entity';
export declare class CreatePaymentDto {
    BankDetails: BankDetails;
    InvoiceName: string;
    userId: string;
}
