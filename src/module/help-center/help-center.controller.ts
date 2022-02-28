import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { HelpCenterDTO } from './dto/help-center.dto';
import { HelpCenterService } from './help-center.service';
import { ObjectId } from 'mongodb';
@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('Help Center')
@Controller('help-center')
export class HelpCenterController {
  constructor(private helpCenterService: HelpCenterService) {}
  @ApiBearerAuth()
  @Get()
  async findAll() {
    const helpReqLst = await this.helpCenterService.findAllReq();
    return helpReqLst;
  }
  @ApiBearerAuth()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const helpReq = await this.helpCenterService.findHelpReq({
      _id: ObjectId(id),
    });
    return helpReq;
  }
  @ApiBearerAuth()
  @Put(':id')
  async update(@Param('id') id: string, @Body() helpCenterDto: HelpCenterDTO) {
    const helpReq = await this.helpCenterService.updateHelpReq(
      id,
      helpCenterDto,
    );
    return helpReq;
  }

  @Post()
  async create(@Body() helpCenterDto: HelpCenterDTO) {
    const helpReq = await this.helpCenterService.createHelpReq(helpCenterDto);
    return helpReq;
  }
  @ApiBearerAuth()
  @Delete(':id')
  async delete(@Param('id') id: string) {
    const helpReq = await this.helpCenterService.removeHelpReq(id);
    return helpReq;
  }
}
