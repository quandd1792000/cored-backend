import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity('help_requests')
export class HelpCenterEntity {
  constructor(partial: Partial<HelpCenterEntity>) {
    Object.assign(this, partial);
  }

  @ObjectIdColumn({ name: '_id' })
  _id: string;

  @IsString()
  @IsNotEmpty()
  @Column()
  phonenumber: string;

  @MinLength(5)
  @Column()
  content: string;
}
