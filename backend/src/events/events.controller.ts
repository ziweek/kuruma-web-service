import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EventsService } from './events.service';
import { Event } from './entity/event.entity';

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}
  @Get()
  findEventAll() {
    return this.eventsService.findEventAll();
  }

  @Get(':id')
  findEventOne(@Param() param) {
    return this.eventsService.findEventOne(param.id);
  }

  @Post()
  createEvent(@Body() event: Event) {
    this.eventsService.createEvent(event);
  }
}
