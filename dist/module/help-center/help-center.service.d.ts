import { Repository } from 'typeorm';
import { HelpCenterDTO } from './dto/help-center.dto';
import { HelpCenterEntity } from './entity/help-center.entity';
export declare class HelpCenterService {
    private helpReqRepository;
    constructor(helpReqRepository: Repository<HelpCenterEntity>);
    findAllReq(): Promise<HelpCenterEntity[]>;
    updateHelpReq(id: string, updateData: HelpCenterDTO): Promise<HelpCenterEntity>;
    createHelpReq(data: HelpCenterDTO): Promise<HelpCenterEntity>;
    findHelpReq(Query: any): Promise<HelpCenterEntity>;
    removeHelpReq(id: string): Promise<import("typeorm").DeleteResult>;
}
