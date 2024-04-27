import { Injectable } from '@nestjs/common';
import { CreateDonorDto } from './dto/create-donor.dto';
import { UpdateDonorDto } from './dto/update-donor.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DonorService {
  constructor(private readonly prisma: PrismaService) {}
  create(createDonorDto: CreateDonorDto) {
    //return 'This action adds a new donor';
    return this.prisma.donor.create({
      data: createDonorDto,
    });
  }

  findAll() {
    // return `This action returns all donor`;
    return this.prisma.donor.findMany();
  }

  findOne(id: number) {
    // return `This action returns a #${id} donor`;
    return this.prisma.donor.findUnique({
      where: { id },
    });
  }

  update(id: number, updateDonorDto: UpdateDonorDto) {
    //  return `This action updates a #${id} donor`;
    return this.prisma.donor.update({
      where: { id },
      data: updateDonorDto,
    });
  }

  remove(id: number) {
    //  return `This action removes a #${id} donor`;
    return this.prisma.donor.delete({
      where: { id },
    });
  }
}
