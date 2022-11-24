import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from 'src/events/entity/event.entity';
import { User } from 'src/users/entity/user.entity';
import { Repository } from 'typeorm';
import { AddChatroomDto } from './dto/addChatroomDto';

import { AddPassengerDto } from './dto/addPassengerDto';
import { Sharing } from './entity/sharing.entity';

@Injectable()
export class SharingsService {
  constructor(
    @InjectRepository(Sharing)
    private sharingsRepository: Repository<Sharing>,

    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
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
    await sharing.passengers.push(sharing.author);
    await this.sharingsRepository.save(sharing);
  }

  async deleteSharing(sharing: Sharing): Promise<void> {
    await this.sharingsRepository.delete(sharing);
  }

  async updateSharing(id, sharing: Sharing): Promise<void> {
    this.sharingsRepository.update(id, {
      title: sharing.title,
      content: sharing.content,
      author: sharing.author,
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

  async addChatroom(id: number, addChatroomDto: AddChatroomDto): Promise<void> {
    const targetSharing = await this.sharingsRepository.findOne({
      where: { id: id },
      relations: ['chatroom'],
    });
    const targetChatroom = await this.eventRepository.findOne({
      where: { room_id: addChatroomDto.room_id },
    });
    targetSharing.chatroom = targetChatroom;
    await this.sharingsRepository.save(targetSharing);
  }
}
