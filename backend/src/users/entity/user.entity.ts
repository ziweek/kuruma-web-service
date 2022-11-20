import { UserAuthority } from 'src/auth/entity/user-authority.entity';
import { Sharing } from 'src/sharings/entity/sharing.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => UserAuthority, (userAuthority) => userAuthority.user, {
    eager: true,
  })
  authorities?: UserAuthority[];

  @ManyToOne(() => Sharing, (sharing) => sharing.passengers, {
    onDelete: 'CASCADE',
    eager: true,
  })
  sharing: Sharing;
}
