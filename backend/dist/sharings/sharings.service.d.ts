import { Event } from 'src/events/entity/event.entity';
import { User } from 'src/users/entity/user.entity';
import { Repository } from 'typeorm';
import { AddChatroomDto } from './dto/addChatroomDto';
import { AddPassengerDto } from './dto/addPassengerDto';
import { Sharing } from './entity/sharing.entity';
export declare class SharingsService {
    private sharingsRepository;
    private userRepository;
    private eventRepository;
    constructor(sharingsRepository: Repository<Sharing>, userRepository: Repository<User>, eventRepository: Repository<Event>);
    findSharingAll(): Promise<Sharing[]>;
    findSharingOne(id: any): Promise<Sharing>;
    createSharing(sharing: Sharing): Promise<void>;
    deleteSharing(sharing: Sharing): Promise<void>;
    updateSharing(id: any, sharing: Sharing): Promise<void>;
    addPassenger(id: number, addPassengerDto: AddPassengerDto): Promise<void>;
    addChatroom(id: number, addChatroomDto: AddChatroomDto): Promise<void>;
}
