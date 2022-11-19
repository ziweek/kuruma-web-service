import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sharing } from './entity/sharing.entity';

@Injectable()
export class SharingsService {
  constructor(
    @InjectRepository(Sharing)
    private sharingsRepository: Repository<Sharing>,
  ) {}

  async findSharingAll(): Promise<Sharing[]> {
    return this.sharingsRepository.find();
  }

  async findSharingOne(id): Promise<Sharing> {
    return this.sharingsRepository.findOneBy({ id });
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
}
