import { Injectable } from '@nestjs/common';
import { VerifyType } from 'src/module/users/entities/users.entity';
import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  Repository,
  RemoveEvent,
} from 'typeorm';
import { Payment } from '../entities/payment.entity';

@Injectable()
@EventSubscriber()
export class PaymentsSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Payment;
  }

  // async beforeInsert(event: InsertEvent<Payment>) {
  //   const PaymentRepository: Repository<Payment> =
  //     event.connection.manager.getRepository<Payment>('payment_settings');

  //   // event.entity. = VerifyType.APPROVALED;
  //   event.entity.URLAdditionalDocumentsVerify = VerifyType.APPROVALED;

  //   console.log(event.entity);
  // }

  //   event.entity.URLAdditionalDocumentsVerify = VerifyType.APPROVALED;
  //   event.entity.URLApprovalOfIllness = VerifyType.APPROVALED;
  //   event.entity.URLDisabilityApprovalVerify = VerifyType.APPROVALED;
  //   event.entity.URLMilitaryWorkPermitVerify = VerifyType.APPROVALED;
  //   event.entity.URLReleasePapersVerify = VerifyType.APPROVALED;
  //   event.entity.URLSocialSecurityCoordinationsVerify = VerifyType.APPROVALED;
  //   event.entity.URLTaxCoordinationsVerify = VerifyType.APPROVALED;
}
