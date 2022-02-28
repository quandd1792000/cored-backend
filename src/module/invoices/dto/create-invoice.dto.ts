import { ApiProperty } from '@nestjs/swagger';

export class CreateInvoiceDto {
  @ApiProperty({
    description: 'userId',
    example: '620e0ae39f318b1d4f5246db',
  })
  userId: string;

  @ApiProperty({
    description: 'date',
    example: 'dd/MM/yyyy HH:mm:ss',
  })
  date: Date;

  @ApiProperty({
    description: 'file_name',
    example: 'image',
  })
  file_name: string;

  @ApiProperty({
    description: 'file_url',
    example: 'C:/User/paycheck/images',
  })
  file_url: string;

  @ApiProperty({
    description: 'number',
    example: '001147',
  })
  number: number;

  @ApiProperty({
    description: 'upload_date',
    example: 'dd/MM/yyyy HH:mm:ss',
  })
  upload_date: Date;
}
