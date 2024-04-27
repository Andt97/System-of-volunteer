import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DonorService } from './donor.service';
import { CreateDonorDto } from './dto/create-donor.dto';
import { UpdateDonorDto } from './dto/update-donor.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('donor')
@Controller('donor')
export class DonorController {
  constructor(private readonly donorService: DonorService) {}

  @Post()
  create(@Body() createDonorDto: CreateDonorDto) {
    return this.donorService.create(createDonorDto);
  }

  @Get()
 async findAll() {
    return this.donorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.donorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDonorDto: UpdateDonorDto) {
    return this.donorService.update(+id, updateDonorDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.donorService.remove(+id);
  }
}
