import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './CreateUserDto';

@Controller('users')
export class UsersController {
  @Post()
  createUser(@Body() createUserDto: CreateUserDto): string {
    return `this action returns ${createUserDto.name.toString()}`;
  }

  @Get()
  readAllUser(): string {
    return `this action returns all users`;
  }

  @Get(':id')
  readOneUser(@Param() param): string {
    return `this actiion returns ${param.id}`;
  }

  @Patch(':id')
  updateUser(@Param() param, @Body() createUserDto: CreateUserDto): string {
    return `this action update ${param.id}`;
  }

  @Delete(':id')
  deleteUser(@Param() param): string {
    return `this action delete ${param.id}`;
  }
}
