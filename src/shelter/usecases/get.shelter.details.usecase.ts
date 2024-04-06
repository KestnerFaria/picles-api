import { IUseCase } from "src/domain/iusecase.interface";
import GetShelterDetailsUseCaseOutput from "./dtos/get.shelter.details.usecase.output";
import { Inject } from "@nestjs/common";
import ShelterTokens from "../shelter.token";
import IShelterRepository from "../interfaces/shelters.repository.interfaces";

export default class GetShelterdetailsUseCase
 implements IUseCase<null, GetShelterDetailsUseCaseOutput> 
 {


    constructor(
        @Inject(ShelterTokens.shelterRepository)
        private readonly shelterRepository: IShelterRepository,
    ){}

     async run(): Promise<GetShelterDetailsUseCaseOutput> {
        const shelter = await this.shelterRepository.get();
        console.log(shelter)
        return new GetShelterDetailsUseCaseOutput({
            shelterName: shelter.name,
            shelterEmail: shelter.email,
            shelterPhone: shelter.phone,
            shelterWatsapp: shelter.Whatsapp,
            createAt: shelter.creatAt,
            updatedAt: shelter.updateAt,
        });
    }

}