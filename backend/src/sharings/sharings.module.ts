import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from 'src/cars/entity/car.entity';
import { User } from 'src/users/entity/user.entity';
import { Sharing } from './entity/sharing.entity';
import { SharingsController } from './sharings.controller';
import { SharingsService } from './sharings.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Car, Sharing])],
  exports: [TypeOrmModule],
  controllers: [SharingsController],
  providers: [SharingsService],
})
export class SharingsModule {}
