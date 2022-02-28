import { ObjectIdColumn, Column, Entity } from 'typeorm';

@Entity('invoice')
export class InvoiceEntity {
  constructor(partial: Partial<InvoiceEntity>) {
    Object.assign(this, partial);
  }

  @ObjectIdColumn({ name: '_id' })
  _id: string;

  @Column()
  date: Date;

  @Column()
  file_name: string;

  @Column()
  file_url: string;

  @Column()
  number: number;

  @Column()
  upload_date: Date;
}
