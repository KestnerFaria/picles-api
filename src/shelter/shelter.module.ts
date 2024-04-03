import { Module } from '@nestjs/common';
import { ShelterController } from './shelter.controller';
import ShelterTokens from './shelter.token';
import GetShelterdetailsUseCase from './usecases/get.shelter.details.usecase';

@Module({
  controllers: [ShelterController],
  providers:[
    {
      provide: ShelterTokens.getShelterDetailsUseCase,
      useClass: GetShelterdetailsUseCase
    }
  ]
})
export class ShelterModule {}
