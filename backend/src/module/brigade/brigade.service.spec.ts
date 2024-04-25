import { Test, TestingModule } from '@nestjs/testing';
import { BrigadeService } from './brigade.service';

describe('BrigadeService', () => {
  let service: BrigadeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrigadeService],
    }).compile();

    service = module.get<BrigadeService>(BrigadeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
