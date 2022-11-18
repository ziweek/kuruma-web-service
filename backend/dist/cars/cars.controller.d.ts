import { CarsService } from './cars.service';
import { Car } from './entity/car.entity';
export declare class CarsController {
    private carService;
    constructor(carService: CarsService);
    findCarAll(): Promise<Car[]>;
    findCarOne(parma: any): Promise<Car>;
    createCar(car: Car): void;
    updateCar(param: any, car: Car): void;
    deleteCar(param: any): void;
}
