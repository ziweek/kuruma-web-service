import { CreateUserDto } from './CreateUserDto';
export declare class UsersController {
    createUser(createUserDto: CreateUserDto): string;
    readAllUser(): string;
    readOneUser(param: any): string;
    updateUser(param: any, createUserDto: CreateUserDto): string;
    deleteUser(param: any): string;
}
