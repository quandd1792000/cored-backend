import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity('companies')
export class Company {
  @ObjectIdColumn({ name: '_id' })
  _id: string;

  @Column()
  name: string;
}
