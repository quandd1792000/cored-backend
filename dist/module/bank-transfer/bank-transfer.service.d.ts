import { Repository } from 'typeorm';
import { BankTransferDTO } from './dto/bank-transfer.dto';
import { BankTransferEntity } from './entity/bank-transfer.entity';
export declare class BankTransferService {
    private bankTransferRepository;
    constructor(bankTransferRepository: Repository<BankTransferEntity>);
    findAllBankTransfer(): Promise<BankTransferEntity[]>;
    updateBankTransfer(id: string, updateData: BankTransferDTO): Promise<BankTransferEntity>;
    createBankTransfer(data: BankTransferDTO): Promise<BankTransferEntity>;
    findBankTransfer(Query: any): Promise<BankTransferEntity>;
    removeBankTransfer(id: string): Promise<import("typeorm").DeleteResult>;
}
