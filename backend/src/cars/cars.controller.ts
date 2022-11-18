import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MissingDeleteDateColumnError } from 'typeorm';
import { CarsService } from './cars.service';
import { Car } from './entity/car.entity';

@Controller('cars')
export class CarsController {
  constructor(private carService: CarsService) {}

  @Get()
  findCarAll() {
    return this.carService.findCarAll();
  }

  @Get(':id')
  findCarOne(@Param() parma) {
    return this.carService.findCarOne(parma.id);
  }

  @Post()
  createCar(@Body() car: Car) {
    this.carService.createCar(car);
  }

  @Patch(':id')
  updateCar(@Param() param, @Body() car: Car) {
    this.carService.updataeCar(param.id, car);
  }

  @Delete(':id')
  deleteCar(@Param() param) {
    this.carService.deleteCar(param.id);
  }
}
