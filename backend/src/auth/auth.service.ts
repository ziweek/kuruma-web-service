import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/users/dto/createUserDto';
import { User } from 'src/users/entity/user.entity';
import { Repository } from 'typeorm';
import { ValidateAccountDto } from './dto/validateAccount.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Payload } from './security/payload.interface';
import { UserAuthority } from './entity/user-authority.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(UserAuthority)
    private userAuthorityRepository: Repository<UserAuthority>,

    private readonly jwtService: JwtService,
  ) {}

  async transformPassword(
    createUserDto: CreateUserDto,
  ): Promise<CreateUserDto> {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    return createUserDto;
  }

  async registerNewAccount(createUserDto: CreateUserDto): Promise<User> {
    const existedUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });
    if (existedUser) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    const createUserDtoHashed = await this.transformPassword(createUserDto);
    const newAccount = await this.userRepository.save(createUserDtoHashed);
    return newAccount;
  }

  async validateAccount(validateAccountDto: ValidateAccountDto): Promise<any> {
    const existedUser = await this.userRepository.findOne({
      where: { email: validateAccountDto.email },
    });
    const validatePassword = await bcrypt.compare(
      validateAccountDto.password,
      existedUser.password,
    );
    if (!existedUser || !validatePassword) {
      throw new UnauthorizedException();
    }
    // return existedUser;
    const payload: Payload = { email: validateAccountDto.email };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async tokenValidateUser(payload: Payload): Promise<User> {
    return await this.userRepository.findOne({
      where: { email: payload.email },
    });
  }
}
