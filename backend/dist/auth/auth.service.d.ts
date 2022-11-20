import { CreateUserDto } from 'src/users/dto/createUserDto';
import { User } from 'src/users/entity/user.entity';
import { Repository } from 'typeorm';
import { ValidateAccountDto } from './dto/validateAccount.dto';
import { JwtService } from '@nestjs/jwt';
import { Payload } from './security/payload.interface';
import { UserAuthority } from './entity/user-authority.entity';
export declare class AuthService {
    private userRepository;
    private userAuthorityRepository;
    private readonly jwtService;
    constructor(userRepository: Repository<User>, userAuthorityRepository: Repository<UserAuthority>, jwtService: JwtService);
    transformPassword(createUserDto: CreateUserDto): Promise<CreateUserDto>;
    registerNewAccount(createUserDto: CreateUserDto): Promise<User>;
    validateAccount(validateAccountDto: ValidateAccountDto): Promise<any>;
    tokenValidateUser(payload: Payload): Promise<User>;
}
