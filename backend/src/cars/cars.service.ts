import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './entity/car.entity';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private carRepository: Repository<Car>,
  ) {}

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
        name: car.name,
        seat: car.seat,
        passenger: car.passenger,
      });
    }
  }
}
