import { Car } from 'src/cars/entity/car.entity';
import { User } from 'src/users/entity/user.entity';
export declare class Sharing {
    id: number;
    title: string;
    content: string;
    author: User;
    car: Car;
    passengers: User[];
}
