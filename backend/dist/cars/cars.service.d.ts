import { User } from 'src/users/entity/user.entity';
import { Repository } from 'typeorm';
import { Car } from './entity/car.entity';
export declare class CarsService {
    private carRepository;
    private userRepository;
    constructor(carRepository: Repository<Car>, userRepository: Repository<User>);
    findCarAll(): Promise<Car[]>;
    findCarOne(id: number): Promise<Car>;
    createCar(car: Car): Promise<void>;
    deleteCar(car: Car): Promise<void>;
    updataeCar(id: number, car: Car): Promise<void>;
}
