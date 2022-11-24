import { Event } from 'src/events/entity/event.entity';
import { User } from 'src/users/entity/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Sharing {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  destination: string;

  @OneToOne(() => User)
  @JoinColumn()
  author: User;

  @OneToMany(() => User, (user) => user.sharing, { nullable: true })
  passengers: User[];

  @OneToOne(() => Event)
  @JoinColumn()
  chatroom: Event;
}
