import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity('sms_otp')
export class SmsOtp {
  @ObjectIdColumn({ name: '_id' })
  _id: string;

  @Column({ type: 'long' })
  expires: number;

  @Column()
  userId: string;

  @Column({ type: 'longtext', length: 500 })
  hash: string;
}
