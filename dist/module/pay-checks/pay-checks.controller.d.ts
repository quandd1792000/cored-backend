import { PayChecksDTO } from './dto/pay-checks.dto';
import { PayChecksService } from './pay-checks.service';
export declare class PayChecksController {
    private paycheckService;
    constructor(paycheckService: PayChecksService);
    getAllPayChecks(): Promise<import("./entity/pay-checks.entity").PayChecksEntity[]>;
    getPayCheck(id: string): Promise<import("./entity/pay-checks.entity").PayChecksEntity>;
    update(id: string, payChecksDto: PayChecksDTO): Promise<import("./entity/pay-checks.entity").PayChecksEntity>;
    addPayChecks(payChecksDto: PayChecksDTO): Promise<import("./entity/pay-checks.entity").PayChecksEntity>;
    deleteCourse(id: string): Promise<import("typeorm").DeleteResult>;
}
