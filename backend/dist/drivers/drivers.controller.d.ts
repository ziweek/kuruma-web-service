import { DriversService } from './drivers.service';
import { Driver } from './entity/driver.entity';
export declare class DriversController {
    private driverService;
    constructor(driverService: DriversService);
    readDriverAll(): Promise<Driver[]>;
    readOneDriver(param: any): Promise<Driver>;
    createDriver(driver: Driver): void;
    deleteDriver(param: any): void;
    updateDriver(param: any, driver: Driver): void;
}
