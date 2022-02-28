import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Req,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { UsersService } from './users.service';
import { diskStorage } from 'multer';
import { v4 as uuidv6 } from 'uuid';
import * as fs from 'fs';
import { ApiProfileFiles } from 'src/decorators/user.decorator';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(public readonly userService: UsersService) {}

  @ApiBearerAuth()
  @Get('')
  findAll() {
    return this.userService.findAll();
  }

  @ApiBearerAuth()
  @Get('me')
  findUser(@Req() req: any) {
    return req.user;
  }

  @ApiBearerAuth()
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.userService.updateProfile(id, body);
  }

  @ApiBearerAuth()
  @ApiProfileFiles()
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
  @Patch('/upload-files')
  upload(@UploadedFiles() files: any, @Req() req: any) {
    return this.userService.updatePathInProfile(req.user._id, files);
  }
}
