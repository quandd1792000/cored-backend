import { PaymentsService } from './payments.service';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    uploadFiles(id: string, files: any): Promise<import("./entities/payment.entity").Payment>;
    findAll(): string;
    findOne(req: any): Promise<import("./entities/payment.entity").Payment>;
    remove(id: string): string;
}
