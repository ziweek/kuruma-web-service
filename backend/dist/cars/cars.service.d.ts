import { Repository } from 'typeorm';
import { Car } from './entity/car.entity';
export declare class CarsService {
    private carRepository;
    constructor(carRepository: Repository<Car>);
    findCarAll(): Promise<Car[]>;
    findCarOne(id: number): Promise<Car>;
    createCar(car: Car): Promise<void>;
    deleteCar(car: Car): Promise<void>;
    updataeCar(id: number, car: Car): Promise<void>;
}
