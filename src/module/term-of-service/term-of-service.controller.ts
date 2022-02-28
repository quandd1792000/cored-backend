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
import { TermOfServiceDTO } from './dto/term-of-service.dto';
import { TermOfServiceService } from './term-of-service.service';
import { ObjectId } from 'mongodb';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('Term of service')
@Controller('term-of-service')
export class TermOfServiceController {
  constructor(private termOfServiceService: TermOfServiceService) {}

  @Get()
  async findAll() {
    const termOfServices =
      await this.termOfServiceService.findAllTermOfService();
    return termOfServices;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const termOfService = await this.termOfServiceService.findTermOfService({
      _id: ObjectId(id),
    });
    return termOfService;
  }
  @ApiBearerAuth()
  @Post()
  async create(@Body() termOfServiceDto: TermOfServiceDTO) {
    const termOfService = await this.termOfServiceService.createTermOfService(
      termOfServiceDto,
    );
    return termOfService;
  }
  @ApiBearerAuth()
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() termOfServiceDto: TermOfServiceDTO,
  ) {
    const termOfService = await this.termOfServiceService.updateTermOfService(
      id,
      termOfServiceDto,
    );
    return termOfService;
  }
  @ApiBearerAuth()
  @Delete(':id')
  async delete(@Param('id') id: string) {
    const termOfService = await this.termOfServiceService.removeTermOfService(
      id,
    );
    return termOfService;
  }
}
