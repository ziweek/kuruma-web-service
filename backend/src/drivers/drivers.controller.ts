import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DriversService } from './drivers.service';
import { Driver } from './entity/driver.entity';

@Controller('drivers')
export class DriversController {
  constructor(private driverService: DriversService) {}

  @Get()
  readDriverAll() {
    return this.driverService.findDriverAll();
  }

  @Get(':id')
  readOneDriver(@Param() param) {
    return this.driverService.findDriverOne(param.id);
  }

  @Post()
  createDriver(@Body() driver: Driver) {
    this.driverService.createDriver(driver);
  }

  @Delete(':id')
  deleteDriver(@Param() param) {
    this.driverService.deleteDriver(param.id);
  }

  @Patch(':id')
  updateDriver(@Param() param, @Body() driver: Driver) {
    this.driverService.updateDriver(param.id, driver);
  }
}
