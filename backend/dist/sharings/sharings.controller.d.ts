import { Sharing } from './entity/sharing.entity';
import { SharingsService } from './sharings.service';
export declare class SharingsController {
    private sharingsService;
    constructor(sharingsService: SharingsService);
    findSharingAll(): Promise<Sharing[]>;
    findSharingOne(param: any): Promise<Sharing>;
    createSharing(sharing: Sharing): void;
    updateSharing(param: any, sharing: Sharing): void;
    deleteSharing(param: any): void;
}
