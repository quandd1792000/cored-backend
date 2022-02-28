import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ObjectId } from 'mongodb';
import { BankTransferService } from './bank-transfer.service';
import { BankTransferDTO } from './dto/bank-transfer.dto';
@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('Bank Transfer')
@Controller('bank-transfer')
export class BankTransferController {
  constructor(private bankTransferService: BankTransferService) {}
  @ApiBearerAuth()
  @Get()
  async findAll() {
    const bankTransfer = await this.bankTransferService.findAllBankTransfer();
    return bankTransfer;
  }
  @ApiBearerAuth()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const bankTransfer = await this.bankTransferService.findBankTransfer({
      _id: ObjectId(id),
    });
    return bankTransfer;
  }
  @ApiBearerAuth()
  @Post()
  async create(@Body() bankTransferDTO: BankTransferDTO) {
    const bankTransfer = await this.bankTransferService.createBankTransfer(
      bankTransferDTO,
    );
    return bankTransfer;
  }
  @ApiBearerAuth()
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() bankTransferDTO: BankTransferDTO,
  ) {
    const bankTransfer = await this.bankTransferService.updateBankTransfer(
      id,
      bankTransferDTO,
    );
    return bankTransfer;
  }
  @ApiBearerAuth()
  @Delete(':id')
  async delete(@Param('id') id: string) {
    const bankTransfer = await this.bankTransferService.removeBankTransfer(id);
    return bankTransfer;
  }
}
