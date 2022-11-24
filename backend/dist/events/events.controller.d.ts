import { EventsService } from './events.service';
import { Event } from './entity/event.entity';
export declare class EventsController {
    private eventsService;
    constructor(eventsService: EventsService);
    findEventAll(): Promise<Event[]>;
    findEventOne(param: any): Promise<Event>;
    createEvent(event: Event): void;
}
