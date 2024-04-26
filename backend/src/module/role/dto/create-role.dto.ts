import { ApiProperty } from '@nestjs/swagger';
import { validate, IsString, IsOptional } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty()
  @IsString()
  description: string;
  @ApiProperty()
  isDeleted: boolean;
}
