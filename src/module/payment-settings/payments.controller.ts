import {
  Controller,
  Get,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  Req,
} from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/decorators/public.decorator';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FieldNameOfFileType } from './entities/payment.entity';
import * as fs from 'fs';
import { v4 as uuidv6 } from 'uuid';
import { ObjectId } from 'mongodb';

@ApiTags('Payments')
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}
  @ApiBearerAuth()
  @Patch('/:id')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: FieldNameOfFileType.URLTaxCoordinations },
        { name: FieldNameOfFileType.URLSocialSecurityCoordinations },
        { name: FieldNameOfFileType.URLApprovalOfIllness },
        { name: FieldNameOfFileType.URLReleasePapers, maxCount: 1 },
        { name: FieldNameOfFileType.URLDisabilityApproval, maxCount: 1 },
        { name: FieldNameOfFileType.URLMilitaryWorkPermit, maxCount: 1 },
        { name: FieldNameOfFileType.URLAdditionalDocuments },
      ],
      {
        storage: diskStorage({
          destination: (req, file, cb) => {
            fs.mkdirSync(process.env.PATH_PAYMENT + file.fieldname, {
              recursive: true,
            });
            cb(null, process.env.PATH_PAYMENT + file.fieldname + '/');
          },
          filename: (req, files, cb) => {
            const filename: string = uuidv6();
            cb(null, `${filename}.png`);
          },
        }),
      },
    ),
  )
  @Public()
  async uploadFiles(@Param('id') id: string, @UploadedFiles() files: any) {
    return await this.paymentsService.uploadsPayment(id, files);
  }

  @ApiBearerAuth()
  @Get()
  findAll() {
    return this.paymentsService.findAll();
  }

  @ApiBearerAuth()
  @Get('me')
  findOne(@Req() req: any) {
    return this.paymentsService.findOne({ userId: ObjectId(req.user._id) });
  }

  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentsService.remove(+id);
  }
}
