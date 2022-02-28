import { Repository } from 'typeorm';
import { TermOfServiceDTO } from './dto/term-of-service.dto';
import { TermOfServiceEntity } from './entity/term-of-service.entity';
export declare class TermOfServiceService {
    private readonly termOfServiceRepo;
    constructor(termOfServiceRepo: Repository<TermOfServiceEntity>);
    findAllTermOfService(): Promise<TermOfServiceEntity[]>;
    createTermOfService(data: TermOfServiceDTO): Promise<TermOfServiceEntity>;
    updateTermOfService(id: string, updateData: TermOfServiceDTO): Promise<TermOfServiceEntity>;
    findTermOfService(Query: any): Promise<TermOfServiceEntity>;
    removeTermOfService(id: string): Promise<import("typeorm").DeleteResult>;
}
