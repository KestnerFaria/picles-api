import { Inject, Injectable } from "@nestjs/common";
import { IUseCase } from "src/domain/iusecase.interface";
import updateShelterDetailsUseCaseOutput from "../dtos/update.shelter.details.usecase.output";
import updateShelterDetailsUseCaseInput from "../dtos/update.shelter.details.usecase.input";
import ShelterTokens from "../shelter.token";
import IShelterRepository from "../interfaces/shelters.repository.interfaces";
import UpdateShelterDetailsUseCaseOutput from "../dtos/update.shelter.details.usecase.output";

@Injectable()
export default class updateShelterDetailsUseCase implements IUseCase<updateShelterDetailsUseCaseInput, updateShelterDetailsUseCaseOutput>
{

    constructor (
        @Inject(ShelterTokens.shelterRepository)
        private readonly shelterRepository: IShelterRepository
    ){}

    async run(input: updateShelterDetailsUseCaseInput): Promise<updateShelterDetailsUseCaseOutput> {
        await this.shelterRepository.update(input)
        const shelter= await this.shelterRepository.get()
        return new UpdateShelterDetailsUseCaseOutput({
            name: shelter.name,
            phone: shelter.phone,
            whatsapp: shelter.Whatsapp,
            email: shelter.email,
            updatedAt: shelter.updatedAt,
            createdAt: shelter.createdAt
        })
    }
}
