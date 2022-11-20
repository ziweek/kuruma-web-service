import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Car } from 'src/cars/entity/car.entity';
import { Sharing } from 'src/sharings/entity/sharing.entity';
import { UserAuthority } from 'src/auth/entity/user-authority.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Car, Sharing, UserAuthority])],
  exports: [TypeOrmModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
