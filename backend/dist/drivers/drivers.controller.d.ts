import { CreateDriverDto } from './CreateDriverDto';
export declare class DriversController {
    createDriver(createDriverDto: CreateDriverDto): string;
    readAllDriver(): string;
    readOneDriver(param: any): string;
    updateDriver(param: any, createDriverDto: CreateDriverDto): string;
    deleteDriver(param: any): string;
}
