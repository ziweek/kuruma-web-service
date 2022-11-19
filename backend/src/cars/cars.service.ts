import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entity/user.entity';
import { Repository } from 'typeorm';
import { AddUserDto } from './dto/addUserDto';
import { Car } from './entity/car.entity';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private carRepository: Repository<Car>,

    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // async addUserToCar(carId: number, addUserDto: AddUserDto): Promise<void> {
  //   const targetCar = await this.carRepository.findOne({
  //     where: { id: carId },
  //     relations: ['passengers'],
  //   });
  //   const targetUser = await this.userRepository.findOne({
  //     where: { id: addUserDto.id },
  //   });
  //   targetCar.passengers[targetCar.passengers.length] = targetUser;
  //   await this.carRepository.save(targetCar);
  //   await this.userRepository.save(targetUser);
  // }

  async findCarAll(): Promise<Car[]> {
    return this.carRepository.find();
  }

  async findCarOne(id: number): Promise<Car> {
    return this.carRepository.findOneBy({ id });
  }

  async createCar(car: Car): Promise<void> {
    this.carRepository.save(car);
  }

  async deleteCar(car: Car): Promise<void> {
    this.carRepository.delete(car);
  }

  async updataeCar(id: number, car: Car): Promise<void> {
    const targetCar = await this.carRepository.findOneBy({ id });
    if (targetCar) {
      await this.carRepository.update(id, {
        seat: car.seat,
      });
    }
  }
}
