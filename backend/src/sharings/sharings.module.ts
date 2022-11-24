import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsModule } from 'src/events/events.module';
import { EventsService } from 'src/events/events.service';

import { User } from 'src/users/entity/user.entity';
import { Sharing } from './entity/sharing.entity';
import { SharingsController } from './sharings.controller';
import { SharingsService } from './sharings.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Sharing]), EventsModule],
  exports: [TypeOrmModule],
  controllers: [SharingsController],
  providers: [SharingsService],
})
export class SharingsModule {}
