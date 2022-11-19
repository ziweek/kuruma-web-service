import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Sharing } from './entity/sharing.entity';
import { SharingsService } from './sharings.service';

@Controller('sharings')
export class SharingsController {
  constructor(private sharingsService: SharingsService) {}

  @Get()
  findSharingAll() {
    return this.sharingsService.findSharingAll();
  }

  @Get(':id')
  findSharingOne(@Param() param) {
    return this.sharingsService.findSharingOne(param.id);
  }

  @Post()
  createSharing(@Body() sharing: Sharing) {
    this.sharingsService.createSharing(sharing);
  }

  @Patch(':id')
  updateSharing(@Param() param, @Body() sharing: Sharing) {
    this.sharingsService.updateSharing(param.id, sharing);
  }

  @Delete(':id')
  deleteSharing(@Param() param) {
    this.sharingsService.deleteSharing(param.id);
  }
}
