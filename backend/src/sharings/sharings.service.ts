import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entity/user.entity';
import { Repository } from 'typeorm';
import { AddPassengerDto } from './dto/addPassengerDto';
import { Sharing } from './entity/sharing.entity';

@Injectable()
export class SharingsService {
  constructor(
    @InjectRepository(Sharing)
    private sharingsRepository: Repository<Sharing>,

    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findSharingAll(): Promise<Sharing[]> {
    return this.sharingsRepository.find({ relations: ['author', 'car'] });
  }

  async findSharingOne(id): Promise<Sharing> {
    return this.sharingsRepository.findOne({
      where: { id: id },
      relations: ['author', 'car'],
    });
  }

  async createSharing(sharing: Sharing): Promise<void> {
    this.sharingsRepository.save(sharing);
  }

  async deleteSharing(sharing: Sharing): Promise<void> {
    this.sharingsRepository.delete(sharing);
  }

  async updateSharing(id, sharing: Sharing): Promise<void> {
    this.sharingsRepository.update(id, {
      title: sharing.title,
      content: sharing.content,
      author: sharing.author,
      car: sharing.car,
      passengers: sharing.passengers,
    });
  }

  async addPassenger(
    id: number,
    addPassengerDto: AddPassengerDto,
  ): Promise<void> {
    const targetSharing = await this.sharingsRepository.findOne({
      where: { id: id },
      relations: ['passengers'],
    });
    const targetUser = await this.userRepository.findOne({
      where: { id: addPassengerDto.passengerId },
    });
    targetSharing.passengers.push(targetUser);
    await this.sharingsRepository.save(targetSharing);
  }
}
