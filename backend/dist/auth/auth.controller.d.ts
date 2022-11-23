import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dto/createUserDto';
import { AuthService } from './auth.service';
import { ValidateAccountDto } from './dto/validateAccount.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    registerAccount(req: Request, createUserDto: CreateUserDto): Promise<any>;
    login(validateAccountDto: ValidateAccountDto, res: Response): Promise<any>;
    isAuthenticated(req: Request): any;
}
