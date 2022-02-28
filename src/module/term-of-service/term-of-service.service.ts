import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { TermOfServiceDTO } from './dto/term-of-service.dto';
import { TermOfServiceEntity } from './entity/term-of-service.entity';

@Injectable()
export class TermOfServiceService {
  constructor(
    @InjectRepository(TermOfServiceEntity)
    private readonly termOfServiceRepo: Repository<TermOfServiceEntity>,
  ) {}

  async findAllTermOfService() {
    const termOfServices = await this.termOfServiceRepo.find();
    if (termOfServices) {
      termOfServices.forEach((Element) => {
        Element._id = Element._id.toString();
      });
      return termOfServices;
    } else {
      return null;
    }
  }

  async createTermOfService(data: TermOfServiceDTO) {
    const termOfService = this.termOfServiceRepo.create(data);
    await this.termOfServiceRepo.save(data);
    return termOfService;
  }

  async updateTermOfService(id: string, updateData: TermOfServiceDTO) {
    await this.termOfServiceRepo.update(id, updateData);
    return await this.termOfServiceRepo.findOne({
      _id: ObjectId(id),
    });
  }

  async findTermOfService(Query: any) {
    const termOfService = await this.termOfServiceRepo.findOne(Query);
    if (termOfService) {
      termOfService._id = termOfService._id.toString();
      return termOfService;
    } else {
      return null;
    }
  }

  async removeTermOfService(id: string) {
    const termOfService = await this.termOfServiceRepo.delete(id);
    return termOfService;
  }
}
