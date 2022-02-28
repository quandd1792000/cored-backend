import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDefined,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  Validate,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { UserType, VerifyType } from 'src/module/users/entities/users.entity';
import {
  AddressConstraint,
  FullNameConstraint,
  IdentityIDConstraint,
  PasswordConstraint,
} from 'src/validation/register.validation';
import { CountryCode } from 'libphonenumber-js';

export class LoginDto {
  @ApiProperty({
    description: 'Personal ID',
    example: '',
  })
  @IsDefined()
  @IsNotEmpty()
  @Validate(IdentityIDConstraint)
  personalID: string;

  @ApiProperty({
    description: 'Password',
    example: '',
  })
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @Validate(PasswordConstraint, {
    message: 'Constraint password 6 words minimum',
  })
  password: string;
}

export class RegisterDto {
  @ApiProperty({
    description: 'Identity Card',
    example: '053605416',
  })
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @Validate(IdentityIDConstraint, { message: 'Israeli ID  invaild ' })
  identityID: string;

  @ApiProperty({
    description: 'Email',
    example: 'example@just.engineer.com',
  })
  @IsDefined()
  @IsString()
  @Transform(({ value }) => value.trim())
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'emailVerify',
    example: VerifyType.APPROVALED,
  })
  @IsDefined()
  @IsEnum(VerifyType)
  @IsNotEmpty()
  emailVerify: string;

  @ApiProperty({
    description: 'Full name',
    example: 'Donlar Tump',
  })
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @Validate(FullNameConstraint, {
    message: 'Constraint full name 2 words minimum',
  })
  fullName: string;

  @ApiProperty({
    description: 'fullNameVerify',
    example: VerifyType.APPROVALED,
  })
  @IsDefined()
  @IsEnum(VerifyType)
  @IsNotEmpty()
  fullNameVerify: string;

  @ApiProperty({
    description: 'Password',
    example: '123456',
  })
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @Validate(PasswordConstraint, {
    message: 'Constraint password 6 words minimum',
  })
  password: string;

  @ApiProperty({
    description: 'Country Code',
    example: '+84',
  })
  @IsDefined()
  @IsString()
  @Transform(({ value }) => value.trim())
  @IsNotEmpty()
  countryCode: CountryCode;

  @ApiProperty({
    description: 'Phone number',
    example: '0964816123',
  })
  @IsDefined()
  @IsString()
  @Transform(({ value }) => value.trim())
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    description: 'Address',
    example: '',
  })
  @IsDefined()
  @IsString()
  @Transform(({ value }) => value.trim())
  @IsNotEmpty()
  @Validate(AddressConstraint, {
    message: 'Constraint address 2 words and 6 characters',
  })
  address: string;

  @ApiProperty({
    description: 'Country',
    example: 'Viet Nam',
  })
  @IsDefined()
  @IsString()
  @Transform(({ value }) => value.trim())
  @IsNotEmpty()
  country: string;

  @ApiProperty({
    description: 'Company',
    example: '',
  })
  @IsDefined()
  @IsString()
  @Transform(({ value }) => value.trim())
  @IsNotEmpty()
  company: string;

  @ApiProperty({
    description: 'CompanyVerify',
    example: VerifyType.APPROVALED,
  })
  @IsDefined()
  @IsEnum(VerifyType)
  @IsNotEmpty()
  companyVerify: string;

  @ApiProperty({
    description: 'role',
    example: UserType.FREELANCER,
  })
  @IsDefined()
  @IsString()
  @IsEnum(UserType)
  @IsNotEmpty()
  role: string;

  @ApiProperty({
    description: 'URLPersonalAccidentsInsuranceVerify',
    example: VerifyType.APPROVALED,
  })
  @IsDefined()
  @IsString()
  @IsEnum(VerifyType)
  @IsNotEmpty()
  URLPersonalAccidentsInsuranceVerify: string;

  @ApiProperty({
    description: 'URLInsurancePolicyVerify',
    example: VerifyType.APPROVALED,
  })
  @IsDefined()
  @IsString()
  @IsEnum(VerifyType)
  @IsNotEmpty()
  URLInsurancePolicyVerify: string;

  @ApiProperty({
    description: 'URLPensionPolicyVerify',
    example: VerifyType.APPROVALED,
  })
  @IsDefined()
  @IsString()
  @IsEnum(VerifyType)
  @IsNotEmpty()
  URLPensionPolicyVerify: string;

  @ApiProperty({
    description: 'URLDrivingLicenseVerify',
    example: VerifyType.APPROVALED,
  })
  @IsDefined()
  @IsString()
  @IsEnum(VerifyType)
  @IsNotEmpty()
  URLDrivingLicenseVerify: string;

  @ApiProperty({
    description: 'URLLifeInsuranceVerify',
    example: VerifyType.APPROVALED,
  })
  @IsDefined()
  @IsString()
  @IsEnum(VerifyType)
  @IsNotEmpty()
  URLLifeInsuranceVerify: string;

  @ApiProperty({
    description: 'URLLifeInsuranceVerify',
    example: VerifyType.APPROVALED,
  })
  @IsDefined()
  @IsString()
  @IsEnum(VerifyType)
  @IsNotEmpty()
  URLHealthInsuranceVerify: string;
}

export class ForgotPasswordDto {
  @ApiProperty({
    description: 'Personal ID',
    example: '',
  })
  @IsDefined()
  @IsNotEmpty()
  @Validate(IdentityIDConstraint)
  personalID: string;
}

export class VerifyOtpDto {
  @ApiProperty({
    description: 'OTP',
    example: '',
  })
  @IsDefined()
  @IsNotEmpty()
  OTP: string;

  @ApiProperty({
    description: 'smsId',
    example: '',
  })
  @IsDefined()
  @IsNotEmpty()
  smsId: string;
}
