"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../users/entity/user.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const user_authority_entity_1 = require("./entity/user-authority.entity");
let AuthService = class AuthService {
    constructor(userRepository, userAuthorityRepository, jwtService) {
        this.userRepository = userRepository;
        this.userAuthorityRepository = userAuthorityRepository;
        this.jwtService = jwtService;
    }
    async transformPassword(createUserDto) {
        createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
        return createUserDto;
    }
    async registerNewAccount(createUserDto) {
        const existedUser = await this.userRepository.findOne({
            where: { email: createUserDto.email },
        });
        if (existedUser) {
            throw new common_1.HttpException('Forbidden', common_1.HttpStatus.FORBIDDEN);
        }
        const createUserDtoHashed = await this.transformPassword(createUserDto);
        const newAccount = await this.userRepository.save(createUserDtoHashed);
        return newAccount;
    }
    async validateAccount(validateAccountDto) {
        const existedUser = await this.userRepository.findOne({
            where: { email: validateAccountDto.email },
        });
        const validatePassword = await bcrypt.compare(validateAccountDto.password, existedUser.password);
        if (!existedUser || !validatePassword) {
            throw new common_1.UnauthorizedException();
        }
        const payload = { email: validateAccountDto.email };
        return {
            accessToken: this.jwtService.sign(payload),
        };
    }
    async tokenValidateUser(payload) {
        return await this.userRepository.findOne({
            where: { email: payload.email },
        });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(user_authority_entity_1.UserAuthority)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map