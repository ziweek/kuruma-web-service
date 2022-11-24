import { Event } from 'src/events/entity/event.entity';
import { User } from 'src/users/entity/user.entity';
export declare class Sharing {
    id: number;
    title: string;
    content: string;
    destination: string;
    author: User;
    passengers: User[];
    chatroom: Event;
}
