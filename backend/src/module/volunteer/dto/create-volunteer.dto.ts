import { ApiProperty } from '@nestjs/swagger';

export class CreateVolunteerDto {
  @ApiProperty()
  personId: number;
  @ApiProperty()
  enable: boolean;
  @ApiProperty()
  isDeleted: boolean;
}
