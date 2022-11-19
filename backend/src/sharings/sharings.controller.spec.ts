import { Test, TestingModule } from '@nestjs/testing';
import { SharingsController } from './sharings.controller';

describe('SharingsController', () => {
  let controller: SharingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SharingsController],
    }).compile();

    controller = module.get<SharingsController>(SharingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
