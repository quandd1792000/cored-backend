import { EntitySubscriberInterface } from 'typeorm';
import { Payment } from '../entities/payment.entity';
export declare class PaymentsSubscriber implements EntitySubscriberInterface {
    listenTo(): typeof Payment;
}
