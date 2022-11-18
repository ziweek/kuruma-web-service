import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { Car } from './entity/car.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  exports: [TypeOrmModule],
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
