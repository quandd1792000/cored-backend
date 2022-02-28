import { HelpCenterDTO } from './dto/help-center.dto';
import { HelpCenterService } from './help-center.service';
export declare class HelpCenterController {
    private helpCenterService;
    constructor(helpCenterService: HelpCenterService);
    findAll(): Promise<import("./entity/help-center.entity").HelpCenterEntity[]>;
    findOne(id: string): Promise<import("./entity/help-center.entity").HelpCenterEntity>;
    update(id: string, helpCenterDto: HelpCenterDTO): Promise<import("./entity/help-center.entity").HelpCenterEntity>;
    create(helpCenterDto: HelpCenterDTO): Promise<import("./entity/help-center.entity").HelpCenterEntity>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
