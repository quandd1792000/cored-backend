import { Repository } from 'typeorm';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { InvoiceEntity } from './entities/invoice.entity';
export declare class InvoicesService {
    private invoiceRepo;
    constructor(invoiceRepo: Repository<InvoiceEntity>);
    findAllInvoice(): Promise<InvoiceEntity[]>;
    createInvoice(data: CreateInvoiceDto): Promise<InvoiceEntity>;
    updateInvoice(id: string, updateData: CreateInvoiceDto): Promise<InvoiceEntity>;
    findInvoice(Query: any): Promise<InvoiceEntity>;
    removeInvoice(id: string): Promise<import("typeorm").DeleteResult>;
}
