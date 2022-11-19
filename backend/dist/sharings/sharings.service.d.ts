import { Repository } from 'typeorm';
import { Sharing } from './entity/sharing.entity';
export declare class SharingsService {
    private sharingsRepository;
    constructor(sharingsRepository: Repository<Sharing>);
    findSharingAll(): Promise<Sharing[]>;
    findSharingOne(id: any): Promise<Sharing>;
    createSharing(sharing: Sharing): Promise<void>;
    deleteSharing(sharing: Sharing): Promise<void>;
    updateSharing(id: any, sharing: Sharing): Promise<void>;
}
