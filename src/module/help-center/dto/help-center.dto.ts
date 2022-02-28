import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class HelpCenterDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'phonenumber',
    example: '0393509856',
  })
  phonenumber: string;
  @MinLength(5)
  @ApiProperty({
    description: 'content',
    example: 'i can not find my persional id',
  })
  content: string;
}
