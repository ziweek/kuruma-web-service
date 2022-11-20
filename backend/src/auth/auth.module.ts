import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entity/user.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserAuthority } from './entity/user-authority.entity';
import { JwtStrategy } from './security/passport.jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, UserAuthority]),
    JwtModule.register({
      secret: 'SECRET_KEY',
      signOptions: { expiresIn: '300s' },
    }),
    PassportModule,
  ],
  exports: [TypeOrmModule],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
