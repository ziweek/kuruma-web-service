import { Sharing } from 'src/sharings/entity/sharing.entity';
export declare class User {
    id: number;
    name: string;
    phone: string;
    email: string;
    password: string;
    sharing: Sharing;
}
