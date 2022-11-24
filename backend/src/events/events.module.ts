import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsGateway } from './events.gateway';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { Event } from './entity/event.entity';
import { Sharing } from 'src/sharings/entity/sharing.entity';
import { User } from 'src/users/entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Event, Sharing])],
  exports: [TypeOrmModule],
  providers: [EventsGateway, EventsService],
  controllers: [EventsController],
})
export class EventsModule {}
