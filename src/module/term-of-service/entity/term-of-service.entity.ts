import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity('term_of_services')
export class TermOfServiceEntity {
  constructor(partial: Partial<TermOfServiceEntity>) {
    Object.assign(this, partial);
  }

  @ObjectIdColumn({ name: '_id' })
  _id: string;

  @Column()
  content: string;
}
