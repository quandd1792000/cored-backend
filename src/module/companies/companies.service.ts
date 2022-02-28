import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private readonly companiesRepository: Repository<Company>,
  ) {}

  create(createCompanyDto: CreateCompanyDto) {
    const company = this.companiesRepository.create(createCompanyDto);
    return this.companiesRepository.save(company);
  }

  findAll() {
    return this.companiesRepository.find();
  }
  async findOne(query: any): Promise<Company> {
    const Company = await this.companiesRepository.findOne({ where: query });
    if (Company) {
      Company._id = Company._id.toString();
      return Company;
    }
    return null;
  }

  update(id: string, updateCompanyDto: UpdateCompanyDto) {
    return this.companiesRepository.update(id, updateCompanyDto);
  }

  remove(id: string) {
    return this.companiesRepository.softDelete(id);
  }
}
