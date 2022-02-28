import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankTransferController } from './bank-transfer.controller';
import { BankTransferService } from './bank-transfer.service';
import { BankTransferEntity } from './entity/bank-transfer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BankTransferEntity])],
  controllers: [BankTransferController],
  providers: [BankTransferService],
})
export class BankTransferModule {}
