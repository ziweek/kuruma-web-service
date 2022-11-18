import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriversController } from './drivers.controller';
import { DriversService } from './drivers.service';
import { Driver } from './entity/driver.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Driver])],
  exports: [TypeOrmModule],
  controllers: [DriversController],
  providers: [DriversService],
})
export class DriversModule {}
