import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { User } from './entity/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  findUserAll() {
    return this.userService.findUserAll();
  }

  @Get(':id')
  findUserOne(@Param() param) {
    return this.userService.findUserOne(param.id);
  }

  @Post()
  createUser(@Body() user: User) {
    this.userService.createUser(user);
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
