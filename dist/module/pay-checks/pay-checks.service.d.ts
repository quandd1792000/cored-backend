import { Repository } from 'typeorm';
import { PayChecksDTO } from './dto/pay-checks.dto';
import { PayChecksEntity } from './entity/pay-checks.entity';
export declare class PayChecksService {
    paychecksRepo: Repository<PayChecksEntity>;
    constructor(paychecksRepo: Repository<PayChecksEntity>);
    findAllPayChecks(): Promise<PayChecksEntity[]>;
    createPayCheck(data: PayChecksDTO): Promise<PayChecksEntity>;
    findPayCheck(Query: any): Promise<PayChecksEntity>;
    updatePaycheck(id: string, updateData: PayChecksDTO): Promise<PayChecksEntity>;
    removePayCheck(id: string): Promise<import("typeorm").DeleteResult>;
}
