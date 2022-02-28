import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HelpCenterDTO } from './dto/help-center.dto';
import { HelpCenterEntity } from './entity/help-center.entity';
import { ObjectId } from 'mongodb';
@Injectable()
export class HelpCenterService {
  constructor(
    @InjectRepository(HelpCenterEntity)
    private helpReqRepository: Repository<HelpCenterEntity>,
  ) {}

  async findAllReq() {
    const listHelpReq = await this.helpReqRepository.find();
    if (listHelpReq) {
      listHelpReq.forEach((Element) => {
        Element._id = Element._id.toString();
      });
      return listHelpReq;
    } else {
      return null;
    }
  }
  async updateHelpReq(id: string, updateData: HelpCenterDTO) {
    await this.helpReqRepository.update(id, updateData);
    return await this.helpReqRepository.findOne({
      _id: ObjectId(id),
    });
  }
  async createHelpReq(data: HelpCenterDTO) {
    const helpRequest = this.helpReqRepository.create(data);
    await this.helpReqRepository.save(data);
    return helpRequest;
  }

  async findHelpReq(Query: any) {
    const helpRequest = await this.helpReqRepository.findOne(Query);
    if (helpRequest) {
      helpRequest._id = helpRequest._id.toString();
      return helpRequest;
    } else {
      return null;
    }
  }

  async removeHelpReq(id: string) {
    const helpReq = await this.helpReqRepository.delete(id);
    return helpReq;
  }
}
