import { Injectable } from '@nestjs/common';
import { CreateBrigadeDto } from './dto/create-brigade.dto';
import { UpdateBrigadeDto } from './dto/update-brigade.dto';

@Injectable()
export class BrigadeService {
  create(createBrigadeDto: CreateBrigadeDto) {
    return 'This action adds a new brigade';
  }

  findAll() {
    return `This action returns all brigade`;
  }

  findOne(id: number) {
    return `This action returns a #${id} brigade`;
  }

  update(id: number, updateBrigadeDto: UpdateBrigadeDto) {
    return `This action updates a #${id} brigade`;
  }

  remove(id: number) {
    return `This action removes a #${id} brigade`;
  }
}
