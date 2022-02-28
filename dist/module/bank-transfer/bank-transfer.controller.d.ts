import { BankTransferService } from './bank-transfer.service';
import { BankTransferDTO } from './dto/bank-transfer.dto';
export declare class BankTransferController {
    private bankTransferService;
    constructor(bankTransferService: BankTransferService);
    findAll(): Promise<import("./entity/bank-transfer.entity").BankTransferEntity[]>;
    findOne(id: string): Promise<import("./entity/bank-transfer.entity").BankTransferEntity>;
    create(bankTransferDTO: BankTransferDTO): Promise<import("./entity/bank-transfer.entity").BankTransferEntity>;
    update(id: string, bankTransferDTO: BankTransferDTO): Promise<import("./entity/bank-transfer.entity").BankTransferEntity>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
