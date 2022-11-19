import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entity/user.entity';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { Car } from './entity/car.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Car, User])],
  exports: [TypeOrmModule],
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
