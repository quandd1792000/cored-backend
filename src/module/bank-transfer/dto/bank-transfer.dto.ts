import { ApiProperty } from '@nestjs/swagger';

export class BankTransferDTO {
  @ApiProperty({
    description: 'userId',
    example: '620e0ae39f318b1d4f5246db',
  })
  userId: string;
  @ApiProperty({
    description: 'accountNumber',
    example: '02868667302',
  })
  accountNumber: string;
  @ApiProperty({
    description: 'branchNumber',
    example: 'branchNumber',
  })
  branchNumber: string;
  @ApiProperty({
    description: 'bankName',
    example: 'TP Bank',
  })
  bankName: string;
  @ApiProperty({
    description: 'amount',
    example: '300',
  })
  amount: number;
  @ApiProperty({
    description: 'invoiceFileUrl',
    example: 'image/invoices/abc.xyz',
  })
  invoiceFileUrl: string;
  @ApiProperty({
    description: 'transferDate',
    example: 'DD/mm/YYYY HH:mm:ss',
  })
  transferDate: Date;
}
