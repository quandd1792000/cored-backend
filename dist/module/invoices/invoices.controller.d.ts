import { InvoicesService } from './invoices.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
export declare class InvoicesController {
    private invoiceService;
    constructor(invoiceService: InvoicesService);
    findAll(): Promise<import("./entities/invoice.entity").InvoiceEntity[]>;
    findOne(id: string): Promise<import("./entities/invoice.entity").InvoiceEntity>;
    create(invoiceDto: CreateInvoiceDto): Promise<import("./entities/invoice.entity").InvoiceEntity>;
    update(id: string, invoiceDto: CreateInvoiceDto): Promise<import("./entities/invoice.entity").InvoiceEntity>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
