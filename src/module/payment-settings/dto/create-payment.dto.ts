import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';
import { BankDetails } from '../entities/payment.entity';

export class CreatePaymentDto {
  @ApiProperty({
    description: 'BankDetails',
    example: {
      AccountNumber: '123123123',
      BranchNumber: 'asdasdasd',
      AccountOwnerName: 'asdadsasdasd',
    },
  })
  BankDetails: BankDetails;

  @ApiProperty({
    description: 'InvoiceName',
    example: 'asdasdas',
  })
  InvoiceName: string;

  @ApiProperty({
    description: 'userId',
    example: '',
  })
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  userId: string;
}
