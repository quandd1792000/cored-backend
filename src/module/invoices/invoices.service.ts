import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { InvoiceEntity } from './entities/invoice.entity';
import { ObjectId } from 'mongodb';
@Injectable()
export class InvoicesService {
  constructor(
    @InjectRepository(InvoiceEntity)
    private invoiceRepo: Repository<InvoiceEntity>,
  ) {}

  async findAllInvoice() {
    const invoices = await this.invoiceRepo.find();
    if (invoices) {
      invoices.forEach((Element) => {
        Element._id = Element._id.toString();
      });
      return invoices;
    } else {
      return null;
    }
  }

  async createInvoice(data: CreateInvoiceDto) {
    const invoices = await this.invoiceRepo.create(data);
    await this.invoiceRepo.save(data);
    return invoices;
  }

  async updateInvoice(id: string, updateData: CreateInvoiceDto) {
    await this.invoiceRepo.update(id, updateData);
    return await this.invoiceRepo.findOne({
      _id: ObjectId(id),
    });
  }

  async findInvoice(Query: any) {
    const invoices = await this.invoiceRepo.findOne(Query);
    if (invoices) {
      invoices._id = invoices._id.toString();
      return invoices;
    } else {
      return null;
    }
  }

  async removeInvoice(id: string) {
    const invoices = await this.invoiceRepo.delete(id);
    return invoices;
  }
}
