import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from 'src/cars/entity/car.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUserDto';
import { User } from './entity/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>, // private carsRepository: Repository<Car>,
  ) {}

  async findUserAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findUserOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  async createUser(createUserDto: CreateUserDto): Promise<void> {
    await this.usersRepository.save(createUserDto);
  }

  async deleteUser(user: User): Promise<void> {
    this.usersRepository.delete(user);
  }

  async updateUser(id: number, user: User): Promise<void> {
    const targetUser = await this.usersRepository.findOneBy({ id });
    if (targetUser) {
      await this.usersRepository.update(id, {
        name: user.name,
        phone: user.phone,
        email: user.email,
        password: user.password,
      });
    }
  }
}
