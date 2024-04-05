import { Module } from '@nestjs/common';
import { ShelterController } from './shelter.controller';
import ShelterTokens from './shelter.token';
import GetShelterdetailsUseCase from './usecases/get.shelter.details.usecase';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Shelter, ShelterSchema } from './schemas/shelter.schema';

@Module({
  controllers: [ShelterController],
  imports: [
    MongooseModule.forFeature([{name: Shelter.name, schema: ShelterSchema}]),
  ],

  providers:[
    {
      provide: ShelterTokens.getShelterDetailsUseCase,
      useClass: GetShelterdetailsUseCase
    }
  ]
})
export class ShelterModule {}
