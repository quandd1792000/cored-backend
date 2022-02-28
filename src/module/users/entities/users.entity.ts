import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum LanguageType {
  HEBREW = 'Hebrew',
  ENGLISH = 'English',
}

export enum UserType {
  FREELANCER = 'freelancer',
  DELIVERY = 'delivery',
}

export enum VerifyType {
  INVALID = 'invalid',
  PENDING = 'pending',
  APPROVALED = 'approvaled',
}

export enum FieldNameOfFileType {
  URLPersonalAccidentsInsurance = 'URLPersonalAccidentsInsurance',
  URLIdentityCard = 'URLIdentityCard',
  URLform101 = 'URLform101',
  URLHiringContract = 'URLHiringContract',
  URLInsurancePolicy = 'URLInsurancePolicy',
  URLCarLicense = 'URLCarLicense',
  URLDrivingLicense = 'URLDrivingLicense',
  URLHealthInsurance = 'URLHealthInsurance',
  URLLifeInsurance = 'URLLifeInsurance',
  URLPensionPolicy = 'URLPensionPolicy',
}

@Entity('users')
export class User {
  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }

  @ObjectIdColumn({ name: '_id' })
  _id: string;

  @Exclude()
  @Column()
  password: string;

  @Column()
  fullName: string;

  @Column({ type: 'enum', enum: VerifyType, default: VerifyType.APPROVALED })
  fullNameVerify: string;

  @Column()
  address: string;

  @Column({ nullable: false })
  phoneNumber: string;

  @Column({ nullable: false })
  email: string;

  @Column('enum', {
    enum: VerifyType,
    default: VerifyType.APPROVALED,
  })
  emailVerify: string;

  @Column({ type: 'enum', enum: UserType, default: UserType.FREELANCER })
  role: string;

  @Column({ type: 'enum', enum: LanguageType, default: LanguageType.ENGLISH })
  language: string;

  @Column({ nullable: false })
  country: string;

  @Column({ nullable: false })
  company: string;

  @Column({
    type: 'enum',
    nullable: true,
    enum: VerifyType,
    default: VerifyType.APPROVALED,
  })
  companyVerify: VerifyType;

  @Column({ nullable: false })
  identityID: string;

  @Column({ nullable: true, default: 'hung' })
  workFor: string;

  @Column({ length: 500, nullable: true })
  URLIdentityCard: string;

  @Column({ length: 500, nullable: true })
  URLform101: string;

  @Column({ length: 500, nullable: true })
  URLHiringContract: string;

  @Column({ length: 500, nullable: true })
  URLPersonalAccidentsInsurance: string;

  @Column({
    type: 'enum',
    nullable: true,
    enum: VerifyType,
    default: VerifyType.APPROVALED,
  })
  URLPersonalAccidentsInsuranceVerify: VerifyType;

  @Column({ length: 500, nullable: true })
  URLInsurancePolicy: string;

  @Column({
    type: 'enum',
    nullable: true,
    enum: VerifyType,
    default: VerifyType.APPROVALED,
  })
  URLInsurancePolicyVerify: VerifyType;

  @Column({ length: 500, nullable: true })
  URLCarLicense: string;

  @Column({
    type: 'simple-enum',
    enum: VerifyType,
    default: VerifyType.APPROVALED,
  })
  URLCarLicenseVerify: VerifyType;

  @Column({ length: 500, nullable: true })
  URLPensionPolicy: string;

  @Column({
    type: 'enum',
    nullable: true,
    enum: VerifyType,
    default: VerifyType.APPROVALED,
  })
  URLPensionPolicyVerify: VerifyType;

  @Column({ length: 500, nullable: true })
  URLDrivingLicense: string;

  @Column({
    type: 'enum',
    nullable: true,
    enum: VerifyType,
    default: VerifyType.APPROVALED,
  })
  URLDrivingLicenseVerify: VerifyType;

  @Column({ length: 500, nullable: true })
  URLLifeInsurance: string;

  @Column({
    type: 'enum',
    nullable: true,
    enum: VerifyType,
    default: VerifyType.APPROVALED,
  })
  URLLifeInsuranceVerify: VerifyType;

  @Column({ length: 500, nullable: true })
  URLHealthInsurance: string;

  @Column({
    type: 'enum',
    nullable: true,
    enum: VerifyType,
    default: VerifyType.APPROVALED,
  })
  URLHealthInsuranceVerify: VerifyType;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt: Date;
}
