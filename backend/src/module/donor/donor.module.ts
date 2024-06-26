import { Module } from '@nestjs/common';
import { DonorService } from './donor.service';
import { DonorController } from './donor.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [DonorController],
  providers: [DonorService],
})
export class DonorModule {}
