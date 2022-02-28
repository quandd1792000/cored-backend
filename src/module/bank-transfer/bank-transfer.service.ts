import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BankTransferDTO } from './dto/bank-transfer.dto';
import { BankTransferEntity } from './entity/bank-transfer.entity';
import { ObjectId } from 'mongodb';
@Injectable()
export class BankTransferService {
  constructor(
    @InjectRepository(BankTransferEntity)
    private bankTransferRepository: Repository<BankTransferEntity>,
  ) {}

  async findAllBankTransfer() {
    const bankTransfer = await this.bankTransferRepository.find();
    if (bankTransfer) {
      bankTransfer.forEach((Element) => {
        Element._id = Element._id.toString();
      });
      return bankTransfer;
    } else {
      return null;
    }
  }
  async updateBankTransfer(id: string, updateData: BankTransferDTO) {
    await this.bankTransferRepository.update(id, updateData);
    return await this.bankTransferRepository.findOne({
      _id: ObjectId(id),
    });
  }
  async createBankTransfer(data: BankTransferDTO) {
    const bankTransfer = this.bankTransferRepository.create(data);
    await this.bankTransferRepository.save(data);
    return bankTransfer;
  }

  async findBankTransfer(Query: any) {
    const bankTransfer = await this.bankTransferRepository.findOne(Query);
    if (bankTransfer) {
      bankTransfer._id = bankTransfer._id.toString();
      return bankTransfer;
    } else {
      return null;
    }
  }

  async removeBankTransfer(id: string) {
    const bankTransfer = await this.bankTransferRepository.delete(id);
    return bankTransfer;
  }
}
