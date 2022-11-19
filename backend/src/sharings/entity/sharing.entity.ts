import { Car } from 'src/cars/entity/car.entity';
import { User } from 'src/users/entity/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
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

  @OneToOne(() => User)
  @JoinColumn()
  author: User;

  @OneToOne(() => Car, { nullable: true })
  @JoinColumn()
  car: Car;

  @ManyToOne(() => User, (user) => user.id, { nullable: true })
  passengers: User[];
}
