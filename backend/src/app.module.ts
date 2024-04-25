import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RecipeModule } from './recipe/recipe.module';
import { UserModule } from './module/user/user.module';
import { DonorModule } from './module/donor/donor.module';
import { VolunteerModule } from './module/volunteer/volunteer.module';
import { BrigadeModule } from './module/brigade/brigade.module';
import { RoleModule } from './module/role/role.module';
import { PersonModule } from './module/person/person.module';
import { DonationModule } from './module/donation/donation.module';
import { BeneficiaryModule } from './module/beneficiary/beneficiary.module';

@Module({
  imports: [PrismaModule, RecipeModule, UserModule, DonorModule, VolunteerModule, BrigadeModule, RoleModule, PersonModule, DonationModule, BeneficiaryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
