import { Test, TestingModule } from '@nestjs/testing';
import { BrigadeController } from './brigade.controller';
import { BrigadeService } from './brigade.service';

describe('BrigadeController', () => {
  let controller: BrigadeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrigadeController],
      providers: [BrigadeService],
    }).compile();

    controller = module.get<BrigadeController>(BrigadeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
