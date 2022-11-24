import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './entity/event.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private eventsRepository: Repository<Event>,
  ) {}

  async findEventAll(): Promise<Event[]> {
    return this.eventsRepository.find({ relations: ['author', 'car'] });
  }

  async findEventOne(id): Promise<Event> {
    return this.eventsRepository.findOne({
      where: { id: id },
    });
  }

  async createEvent(Event: Event): Promise<void> {
    this.eventsRepository.save(Event);
  }

  async deleteEvent(Event: Event): Promise<void> {
    this.eventsRepository.delete(Event);
  }
}
