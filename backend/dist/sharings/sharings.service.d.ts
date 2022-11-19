import { User } from 'src/users/entity/user.entity';
import { Repository } from 'typeorm';
import { AddPassengerDto } from './dto/addPassengerDto';
import { Sharing } from './entity/sharing.entity';
export declare class SharingsService {
    private sharingsRepository;
    private userRepository;
    constructor(sharingsRepository: Repository<Sharing>, userRepository: Repository<User>);
    findSharingAll(): Promise<Sharing[]>;
    findSharingOne(id: any): Promise<Sharing>;
    createSharing(sharing: Sharing): Promise<void>;
    deleteSharing(sharing: Sharing): Promise<void>;
    updateSharing(id: any, sharing: Sharing): Promise<void>;
    addPassenger(id: number, addPassengerDto: AddPassengerDto): Promise<void>;
}
