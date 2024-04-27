import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class PersonService {
  constructor(private readonly prisma: PrismaService) {}
  create(createPersonDto: CreatePersonDto) {
    // return 'This action adds a new person';
    return this.prisma.person.create({
      data: createPersonDto,
    });
  }

  async findAll() {
    //return `This action returns all person`;
    return this.prisma.person.findMany();
  }

  findOne(id: number) {
    //  return `This action returns a #${id} person`;
    return this.prisma.person.findUnique({
      where: { id },
    });
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    //return `This action updates a #${id} person`;
    return this.prisma.person.update({
      where: { id },
      data: updatePersonDto,
    });
  }

  remove(id: number) {
    // return `This action removes a #${id} person`;
    return this.prisma.person.delete({
      where: { id },
    });
  }
}
