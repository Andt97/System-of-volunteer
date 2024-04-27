import { ApiProperty } from "@nestjs/swagger";

export class CreateDonorDto {
    @ApiProperty()
    personId:number;
}
