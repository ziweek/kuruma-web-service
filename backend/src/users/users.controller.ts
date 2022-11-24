import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { User } from './entity/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  // @Patch('matchCar/:id')
  // assignCar(@Param() param, @Body() car: Car) {
  //   this.userService.matchCar(param.id, car);
  // }

  @Get()
  findUserAll() {
    return this.userService.findUserAll();
  }

  @Get(':id')
  findUserOne(@Param() param) {
    return this.userService.findUserOne(param.id);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    this.userService.createUser(createUserDto);
  }

  @Patch(':id')
  updateUser(@Param() param, @Body() user: User) {
    this.userService.updateUser(param.id, user);
  }

  @Delete(':id')
  deleteUser(@Param() param) {
    this.userService.deleteUser(param.id);
  }
}
