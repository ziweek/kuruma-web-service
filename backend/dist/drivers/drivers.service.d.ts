import { Repository } from 'typeorm';
import { Driver } from './entity/driver.entity';
export declare class DriversService {
    private driverRepository;
    constructor(driverRepository: Repository<Driver>);
    findDriverAll(): Promise<Driver[]>;
    findDriverOne(id: number): Promise<Driver>;
    createDriver(driver: Driver): Promise<void>;
    deleteDriver(driver: Driver): Promise<void>;
    updateDriver(id: number, driver: Driver): Promise<void>;
}
