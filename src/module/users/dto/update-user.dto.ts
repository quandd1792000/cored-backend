import { ApiProperty } from '@nestjs/swagger';
import { IsString, Validate } from 'class-validator';
import { LanguageType } from 'src/module/users/entities/users.entity';
import {
  FullNameConstraint,
  IdentityIDConstraint,
  PasswordConstraint,
} from 'src/validation/register.validation';
import { CountryCode } from 'libphonenumber-js';

export enum FieldNoApproval {
  password = 'password',
  language = 'language',
  identityID = 'identityID',
  phone = 'phone',
  countryCode = 'countryCode',
}

export class UpdateUserDto {
  @ApiProperty({
    description: 'Email',
    example: 'example@just.engineer.com',
  })
  @IsString()
  email: string;

  @ApiProperty({
    description: 'Full name',
    example: 'Donlar Tump',
  })
  @IsString()
  @Validate(FullNameConstraint, {
    message: 'Constraint full name 2 words minimum',
  })
  fullName?: string;

  @ApiProperty({
    description: 'Password',
    example: '123456',
  })
  @IsString()
  @Validate(PasswordConstraint, {
    message: 'Constraint password 6 words minimum',
  })
  password: string;

  @ApiProperty({
    description: 'Country Code',
    example: '+84',
  })
  @IsString()
  countryCode: CountryCode;

  @ApiProperty({
    description: 'Phone number',
    example: '0964816123',
  })
  @IsString()
  phone: string;

  @ApiProperty({
    description: 'Language',
    example: '',
  })
  @IsString()
  language: LanguageType;

  @ApiProperty({
    description: 'identity ID',
    example: '',
  })
  @IsString()
  @Validate(IdentityIDConstraint, { message: 'Israeli ID  invaild ' })
  identityID: string;

  @ApiProperty({
    description: 'Company',
    example: '',
  })
  @IsString()
  company: string;

  // @ApiProperty({
  //   example: '',
  // })
  // @IsString()
  // @Validate(UrlConstraint )
  // URLDrivingLicense: string;

  // @ApiProperty({
  //   description: 'URL Car License',
  //   example: '',
  // })
  // @IsString()
  // @Validate(UrlConstraint )
  // URLCarLicense: string;

  // @ApiProperty({
  //   description: 'URL Identity Card',
  //   example: '',
  // })
  // @IsString()
  // @Validate(UrlConstraint )
  // URLInsurancePolicy: string;

  // @ApiProperty({
  //   example: '',
  // })
  // @IsString()
  // @Validate(UrlConstraint )
  // URLPersonalAccidentsInsurance: string;

  // @ApiProperty({
  //   example: '',
  // })
  // @IsString()
  // @Validate(UrlConstraint )
  // URLPensionPolicy: string;

  // @ApiProperty({
  //   example: '',
  // })
  // @IsString()
  // @Validate(UrlConstraint )
  // URLLifeInsurance: string;

  // @ApiProperty({
  //   example: '',
  // })
  // @IsString()
  // @Validate(UrlConstraint )
  // URLHealthInsurance: string;

  @ApiProperty({
    example: '',
  })
  @IsString()
  workFor: string;
}
