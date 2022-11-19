import { Test, TestingModule } from '@nestjs/testing';
import { SharingsService } from './sharings.service';

describe('SharingsService', () => {
  let service: SharingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SharingsService],
    }).compile();

    service = module.get<SharingsService>(SharingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
