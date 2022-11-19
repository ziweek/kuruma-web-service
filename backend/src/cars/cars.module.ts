import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sharing } from 'src/sharings/entity/sharing.entity';
import { User } from 'src/users/entity/user.entity';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { Car } from './entity/car.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Car, User, Sharing])],
  exports: [TypeOrmModule],
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
