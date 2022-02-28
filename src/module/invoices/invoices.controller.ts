import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { ObjectId } from 'mongodb';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Invoices')
@Controller('invoices')
export class InvoicesController {
  constructor(private invoiceService: InvoicesService) {}
  @ApiBearerAuth()
  @Get()
  async findAll() {
    const invoiceLst = await this.invoiceService.findAllInvoice();
    return invoiceLst;
  }
  @ApiBearerAuth()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const invoice = await this.invoiceService.findInvoice({
      _id: ObjectId(id),
    });
    return invoice;
  }
  @ApiBearerAuth()
  @Post()
  async create(@Body() invoiceDto: CreateInvoiceDto) {
    const invoice = await this.invoiceService.createInvoice(invoiceDto);
    return invoice;
  }
  @ApiBearerAuth()
  @Put(':id')
  async update(@Param('id') id: string, @Body() invoiceDto: CreateInvoiceDto) {
    const invoice = await this.invoiceService.updateInvoice(id, invoiceDto);
    return invoice;
  }
  @ApiBearerAuth()
  @Delete(':id')
  async delete(@Param('id') id: string) {
    const invoice = await this.invoiceService.removeInvoice(id);
    return invoice;
  }
}
