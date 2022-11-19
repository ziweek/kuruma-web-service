import { CreateUserDto } from './dto/createUserDto';
import { User } from './entity/user.entity';
import { UsersService } from './users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    findUserAll(): Promise<User[]>;
    findUserOne(param: any): Promise<User>;
    createUser(createUserDto: CreateUserDto): void;
    updateUser(param: any, user: User): void;
    deleteUser(param: any): void;
}
