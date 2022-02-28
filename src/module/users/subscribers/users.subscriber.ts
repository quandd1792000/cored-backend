import { Injectable } from '@nestjs/common';
import { Payment } from 'src/module/payment-settings/entities/payment.entity';
import { isEnum } from 'class-validator';
import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  Repository,
} from 'typeorm';
import { User } from '../entities/users.entity';

@Injectable()
@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return User;
  }

  async afterInsert(event: InsertEvent<User>) {
    const paymentRepository: Repository<Payment> =
      event.connection.manager.getRepository<Payment>('payment_settings');
    const user = event.entity;
    await paymentRepository.save({ userId: user._id });
  }
}
