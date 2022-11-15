import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateDriverDto } from './CreateDriverDto';

@Controller('drivers')
export class DriversController {
  @Post()
  createDriver(@Body() createDriverDto: CreateDriverDto): string {
    return `this action returns ${createDriverDto.name.toString()}`;
  }

  @Get()
  readAllDriver(): string {
    return `this action returns all Drivers`;
  }

  @Get(':id')
  readOneDriver(@Param() param): string {
    return `this actiion returns ${param.id}`;
  }

  @Patch(':id')
  updateDriver(
    @Param() param,
    @Body() createDriverDto: CreateDriverDto,
  ): string {
    return `this action update ${param.id}`;
  }

  @Delete(':id')
  deleteDriver(@Param() param): string {
    return `this action delete ${param.id}`;
  }
}
