import { IUseCase } from "src/domain/iusecase.interface";
import DeletePetByIdUseCaseInput from "./dtos/delete.pet.by.id.usecase.input";
import DeletePetByIdUseCaseOutPut from "./dtos/delete.pet.by.id.usecase.output";
import { Inject } from "@nestjs/common";
import PetTokens from "../pet.tokens";
import IPetRepository from "../interfaces/pet.repository.interface";
import PetNotFoundError from "src/domain/errors/pet.not.found.error";
import { Pet } from "../schemas/pet.schema";

export default class DeletePetByIdUseCase implements IUseCase<DeletePetByIdUseCaseInput, DeletePetByIdUseCaseOutPut>{
    constructor(
        @Inject(PetTokens.petRepository)
        private readonly petRepository: IPetRepository
    ){}

    async run (input: DeletePetByIdUseCaseInput): Promise<DeletePetByIdUseCaseOutPut>{
        const pet =  await this.getPetByID(input.id)

        if (!pet) {
            throw new PetNotFoundError()
            
        }
        await this.petRepository.deleteById(input.id)
        
        return new DeletePetByIdUseCaseOutPut()
    }

    private async getPetByID(id: string): Promise<Pet>{
        try {
            return await this.petRepository.getById(id)
        } catch (error) {
            return null
        }
    }

}