import { Module } from '@nestjs/common';
import { BrigadeService } from './brigade.service';
import { BrigadeController } from './brigade.controller';

@Module({
  controllers: [BrigadeController],
  providers: [BrigadeService],
})
export class BrigadeModule {}
