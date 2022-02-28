import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { Payment } from './entities/payment.entity';
import { ObjectId } from 'mongodb';
import { VerifyType } from '../users/entities/users.entity';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
    private readonly usersService: UsersService,
  ) {}

  async create(createPaymentDto: CreatePaymentDto) {
    const user = await this.usersService.findOne({
      _id: ObjectId(createPaymentDto.userId),
    });
    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `Couldn't find user {id: ${createPaymentDto.userId}}`,
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    const payment = this.paymentRepository.create(createPaymentDto);
    return this.paymentRepository.save(payment);
  }

  async updatePayment(id: string, inf: any) {
    Object.keys(inf).reduce((total, currentValue) => {
      inf[currentValue + 'Verify'] = VerifyType.PENDING;
      return null;
    }, 'start');
    return this.update(id, inf);
  }

  async uploadsPayment(paymentId, files) {
    const updatePayment = {};
    Object.keys(files).reduce((total, currentValue) => {
      updatePayment[currentValue] = [
        ...new Set(files[currentValue].map((file) => file.path)),
      ];

      return null;
    }, 'start');

    return await this.updatePayment(paymentId, updatePayment);
  }

  findAll() {
    return `This action returns all payments`;
  }

  async findOne(query: any): Promise<Payment> {
    const payment = await this.paymentRepository.findOne({ where: query });
    if (payment) {
      payment._id = payment._id.toString();

      return payment;
    }

    return null;
  }

  async update(id: string, updatePaymentDto: any) {
    await this.paymentRepository.update(id, updatePaymentDto);
    return await this.findOne({ _id: ObjectId(id) });
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}
