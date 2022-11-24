import { Repository } from 'typeorm';
import { Event } from './entity/event.entity';
export declare class EventsService {
    private eventsRepository;
    constructor(eventsRepository: Repository<Event>);
    findEventAll(): Promise<Event[]>;
    findEventOne(id: any): Promise<Event>;
    createEvent(Event: Event): Promise<void>;
    deleteEvent(Event: Event): Promise<void>;
}
