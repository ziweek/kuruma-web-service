import { Driver } from 'src/drivers/entity/driver.entity';
import { User } from 'src/users/entity/user.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Driver)
  @OneToMany(() => User, (user) => user.car)
  passenger: User[];
}
