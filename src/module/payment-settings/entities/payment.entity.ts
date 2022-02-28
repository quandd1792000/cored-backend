import { VerifyType } from 'src/module/users/entities/users.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BankDetails {
  AccountNumber: string;
  BranchNumber: string;
  AccountOwnerName: string;
  Bank: string;
}

export enum FieldNameOfFileType {
  URLTaxCoordinations = 'URLTaxCoordinations',
  URLSocialSecurityCoordinations = 'URLSocialSecurityCoordinations',
  URLApprovalOfIllness = 'URLApprovalOfIllness',
  URLReleasePapers = 'URLReleasePapers',
  URLDisabilityApproval = 'URLDisabilityApproval',
  URLMilitaryWorkPermit = 'URLMilitaryWorkPermit',
  URLAdditionalDocuments = 'URLAdditionalDocuments',
}

@Entity('payment_settings')
export class Payment {
  constructor(partial: Partial<Payment>) {
    Object.assign(this, partial);
  }

  @ObjectIdColumn({ name: '_id' })
  _id: string;

  @Column({ type: 'json' })
  BankDetails: BankDetails;

  @Column({
    type: 'enum',
    nullable: true,
    enum: VerifyType,
    default: VerifyType.APPROVALED,
  })
  BankDetailsVerify: VerifyType;

  @Column()
  InvoiceName: string;

  @Column({
    type: 'enum',
    nullable: true,
    enum: VerifyType,
    default: VerifyType.APPROVALED,
  })
  InvoiceNameVerify: VerifyType;

  @Column()
  userId: string;

  @Column({ type: 'array' })
  URLTaxCoordinations: Array<string>;

  @Column({
    type: 'enum',
    nullable: true,
    enum: VerifyType,
    default: VerifyType.APPROVALED,
  })
  URLTaxCoordinationsVerify: VerifyType;

  @Column({ type: 'array' })
  URLSocialSecurityCoordinations: Array<string>;

  @Column({
    type: 'enum',
    nullable: true,
    enum: VerifyType,
    default: VerifyType.APPROVALED,
  })
  URLSocialSecurityCoordinationsVerify: VerifyType;

  @Column({ type: 'array' })
  URLApprovalOfIllness: Array<string>;

  @Column({
    type: 'enum',
    nullable: true,
    enum: VerifyType,
    default: VerifyType.APPROVALED,
  })
  URLApprovalOfIllnessVerify: VerifyType;

  @Column({ type: 'longtext', nullable: true, length: 500 })
  URLReleasePapers: string;

  @Column({
    type: 'enum',
    nullable: true,
    enum: VerifyType,
    default: VerifyType.APPROVALED,
  })
  URLReleasePapersVerify: VerifyType;

  @Column({ type: 'longtext', nullable: true, length: 500 })
  URLDisabilityApproval: string;

  @Column({
    type: 'enum',
    nullable: true,
    enum: VerifyType,
    default: VerifyType.APPROVALED,
  })
  URLDisabilityApprovalVerify: VerifyType;

  @Column({ type: 'longtext', nullable: true, length: 500 })
  URLMilitaryWorkPermit: string;

  @Column({
    type: 'enum',
    nullable: true,
    enum: VerifyType,
    default: VerifyType.APPROVALED,
  })
  URLMilitaryWorkPermitVerify: VerifyType;

  @Column({ type: 'longtext', nullable: true, length: 500 })
  URLAdditionalDocuments: string;

  @Column({
    type: 'enum',
    nullable: true,
    enum: VerifyType,
    default: VerifyType.APPROVALED,
  })
  URLAdditionalDocumentsVerify: VerifyType;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt: Date;
}
