import { Car } from 'src/cars/entity/car.entity';
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

  @OneToOne(() => User)
  @JoinColumn()
  author: User;

  @OneToOne(() => Car, { nullable: true })
  @JoinColumn()
  car: Car;

  @OneToMany(() => User, (user) => user.sharing, { nullable: true })
  passengers: User[];
}
