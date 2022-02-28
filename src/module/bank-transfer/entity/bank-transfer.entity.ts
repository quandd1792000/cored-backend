import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity('bank_transfer')
export class BankTransferEntity {
  constructor(partial: Partial<BankTransferEntity>) {
    Object.assign(this, partial);
  }

  @ObjectIdColumn({ name: '_id' })
  _id: string;

  @Column()
  userId: string;

  @Column()
  accountNumber: string;

  @Column()
  branchNumber: string;

  @Column()
  bankName: string;

  @Column()
  amount: number;

  @Column()
  invoiceFileUrl: string;

  @Column()
  transferDate: Date;
}
