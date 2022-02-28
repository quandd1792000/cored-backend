import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  ClassSerializerInterceptor,
  UploadedFiles,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ForgotPasswordDto,
  LoginDto,
  RegisterDto,
  VerifyOtpDto,
} from './dto/auth.dto';
import { User } from 'src/module/users/entities/users.entity';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/decorators/public.decorator';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv6 } from 'uuid';
import * as fs from 'fs';
import { ApiRegisterFiles } from 'src/decorators/user.decorator';

@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('Auth')
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @Public()
  @ApiOkResponse({ type: User })
  async login(@Body() body: LoginDto): Promise<User> {
    const user = await this.authService.login(body);
    return user;
  }

  @Post('/register')
  @Public()
  @ApiOkResponse({ type: User })
  async register(@Body() body: RegisterDto) {
    return await this.authService.register(body);
  }

  @ApiBearerAuth()
  @ApiRegisterFiles()
  @Post('/register/upload-files')
  @UseInterceptors(
    AnyFilesInterceptor({
      storage: diskStorage({
        destination: (req, file, cb) => {
          const user: any = req.user;
          fs.mkdirSync(
            process.env.PATH_IMAGE + '/' + user._id + '/' + file.fieldname,
            {
              recursive: true,
            },
          );
          cb(
            null,
            process.env.PATH_IMAGE +
              '/' +
              user._id +
              '/' +
              file.fieldname +
              '/',
          );
        },
        filename: (req, files, cb) => {
          const filename: string = uuidv6();
          cb(null, `${filename}.png`);
        },
      }),
    }),
  )
  @ApiOkResponse({ type: User })
  async uploadFiles(@UploadedFiles() files: any, @Req() req: any) {
    return await this.authService.uploadFiles(req.user._id, files);
  }

  @ApiBearerAuth()
  @Post('/forgot-password')
  @Public()
  @ApiOkResponse({ type: User })
  async forgotPassword(@Body() body: ForgotPasswordDto) {
    return await this.authService.forgotPassword(body);
  }

  @Post('/verify-otp')
  @Public()
  @ApiOkResponse({ type: User })
  async verifyOtp(@Body() body: VerifyOtpDto) {
    return await this.authService.verifyOtp(body);
  }

  // @ApiBearerAuth()
  // @Post('/change-password')
  // @ApiOkResponse({ type: User })
  // async changePassword(@Body() body: RegisterDto) {}
}
