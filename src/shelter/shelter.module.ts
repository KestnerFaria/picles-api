import { Module } from '@nestjs/common';
import { ShelterController } from './shelter.controller';
import ShelterTokens from './shelter.token';
import GetShelterdetailsUseCase from './usecases/get.shelter.details.usecase';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Shelter, ShelterSchema } from './schemas/shelter.schema';
import { ShelterRepository } from './shelter.repository';
import updateShelterDetailsUseCase from './usecases/update.shelter.datails.usecase';

@Module({
  controllers: [ShelterController],
  imports: [
    MongooseModule.forFeature([{name: Shelter.name, schema: ShelterSchema}]),
  ],

  providers:[
    {
      provide: ShelterTokens.getShelterDetailsUseCase,
      useClass: GetShelterdetailsUseCase
    },
  {
    provide: ShelterTokens.shelterRepository,
    useClass: ShelterRepository,
  },
  {
    provide: ShelterTokens.updateShelterDetailsUseCase,
    useClass: updateShelterDetailsUseCase
  }
  ]
})
export class ShelterModule {}
