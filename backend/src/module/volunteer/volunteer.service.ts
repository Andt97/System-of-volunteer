import { Injectable } from '@nestjs/common';
import { CreateVolunteerDto } from './dto/create-volunteer.dto';
import { UpdateVolunteerDto } from './dto/update-volunteer.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VolunteerService {
  constructor(private readonly prisma: PrismaService) {}
  create(createVolunteerDto: CreateVolunteerDto) {
    // return 'This action adds a new volunteer';
    return this.prisma.volunteer.create({
      data: createVolunteerDto,
    });
  }

  findAll() {
    // return `This action returns all volunteer`;
    return this.prisma.volunteer.findMany();
  }

  findOne(id: number) {
    //  return `This action returns a #${id} volunteer`;
    return this.prisma.volunteer.findUnique({
      where: { id },
    });
  }

  update(id: number, updateVolunteerDto: UpdateVolunteerDto) {
    // return `This action updates a #${id} volunteer`;
    return this.prisma.volunteer.update({
      where: { id },
      data: updateVolunteerDto,
    });
  }

  remove(id: number) {
    // return `This action removes a #${id} volunteer`;
    return this.prisma.volunteer.delete({
      where: { id },
    });
  }
}
