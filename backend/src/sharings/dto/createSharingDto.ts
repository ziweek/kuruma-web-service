import { User } from 'src/users/entity/user.entity';

export class CreateSharingDto {
  title: string;
  content: string;
  author: User;
}
