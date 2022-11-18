import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Driver } from './entity/driver.entity';

@Injectable()
export class DriversService {
  constructor(
    @InjectRepository(Driver)
    private driverRepository: Repository<Driver>,
  ) {}

  async findDriverAll(): Promise<Driver[]> {
    return this.driverRepository.find();
  }

  async findDriverOne(id: number): Promise<Driver> {
    return this.driverRepository.findOneBy({ id });
  }

  async createDriver(driver: Driver): Promise<void> {
    await this.driverRepository.save(driver);
  }

  async deleteDriver(driver: Driver): Promise<void> {
    await this.driverRepository.delete(driver);
  }

  async updateDriver(id: number, driver: Driver): Promise<void> {
    const targetDriver = await this.driverRepository.findOneBy({ id });
    if (targetDriver) {
      await this.driverRepository.update(id, {
        name: driver.name,
        phone: driver.phone,
        email: driver.email,
        password: driver.password,
      });
    }
  }
}
