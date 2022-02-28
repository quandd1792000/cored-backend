export declare class BankTransferEntity {
    constructor(partial: Partial<BankTransferEntity>);
    _id: string;
    userId: string;
    accountNumber: string;
    branchNumber: string;
    bankName: string;
    amount: number;
    invoiceFileUrl: string;
    transferDate: Date;
}
