import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoleService {
  constructor(private readonly prisma: PrismaService) {}

  create(createRoleDto: CreateRoleDto) {
    // return 'This action adds a new role';
    return this.prisma.role.create({
      data: createRoleDto,
    });
  }

  async findAll() {
    //return `This action returns all role`;
    return this.prisma.role.findMany();
  }

  findOne(id: number) {
    //return `This action returns a #${id} role`;
    return this.prisma.role.findUnique({
      where: { id },
    });
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    // return `This action updates a #${id} role`;
    return this.prisma.recipe.update({
      where: { id },
      data: updateRoleDto,
    });
  }

  async remove(id: number) {
    //return `This action removes a #${id} role`;
    return await this.prisma.recipe.delete({
      where: { id },
    });
  }
}
