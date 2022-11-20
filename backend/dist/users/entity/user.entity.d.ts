import { UserAuthority } from 'src/auth/entity/user-authority.entity';
import { Sharing } from 'src/sharings/entity/sharing.entity';
export declare class User {
    id: number;
    name: string;
    phone: string;
    email: string;
    password: string;
    authorities?: UserAuthority[];
    sharing: Sharing;
}
