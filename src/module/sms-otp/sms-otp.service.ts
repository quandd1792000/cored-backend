import { Injectable } from '@nestjs/common';
import { UpdateSmsOtpDto } from './dto/update-sms-otp.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SmsOtp } from './entities/sms-otp.entity';

@Injectable()
export class SmsOtpService {
  constructor(
    @InjectRepository(SmsOtp)
    private readonly SmsOtpRepository: Repository<SmsOtp>,
  ) {}

  async create() {
    const otp = Math.floor(100000 + Math.random() * 900000);
    const ttl = 2 * 60 * 1000;
    const expires = Date.now() + ttl;
    const hash = await bcrypt.hash(String(otp), 10);
    const save = {
      expires: expires,
      hash: hash,
    };
    return { smsId: (await this.SmsOtpRepository.save(save))._id.toString() };
  }

  findAll() {
    return `This action returns all smsOtp`;
  }

  async findOne(query: any): Promise<SmsOtp> {
    const payment = await this.SmsOtpRepository.findOne({ where: query });
    if (payment) {
      payment._id = payment._id.toString();

      return payment;
    }

    return null;
  }

  update(id: number, updateSmsOtpDto: UpdateSmsOtpDto) {
    return `This action updates a #${id} smsOtp`;
  }

  remove(id: number) {
    return `This action removes a #${id} smsOtp`;
  }
}
