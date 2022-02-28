import { TermOfServiceDTO } from './dto/term-of-service.dto';
import { TermOfServiceService } from './term-of-service.service';
export declare class TermOfServiceController {
    private termOfServiceService;
    constructor(termOfServiceService: TermOfServiceService);
    findAll(): Promise<import("./entity/term-of-service.entity").TermOfServiceEntity[]>;
    findOne(id: string): Promise<import("./entity/term-of-service.entity").TermOfServiceEntity>;
    create(termOfServiceDto: TermOfServiceDTO): Promise<import("./entity/term-of-service.entity").TermOfServiceEntity>;
    update(id: string, termOfServiceDto: TermOfServiceDTO): Promise<import("./entity/term-of-service.entity").TermOfServiceEntity>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
