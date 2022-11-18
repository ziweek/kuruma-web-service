import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findUserAll(): Promise<User[]>;
    findUserOne(id: number): Promise<User>;
    createUser(user: User): Promise<void>;
    deleteUser(user: User): Promise<void>;
    updateUser(id: number, user: User): Promise<void>;
}
