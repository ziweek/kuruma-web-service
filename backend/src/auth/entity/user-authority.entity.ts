import { User } from 'src/users/entity/user.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class UserAuthority {
  @PrimaryColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  authorityName: string;

  @ManyToOne(() => User, (user) => user.authorities)
  user: User;
}
