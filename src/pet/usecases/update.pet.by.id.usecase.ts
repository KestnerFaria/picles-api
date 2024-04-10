import { IUseCase } from "src/domain/iusecase.interface";
import UpdatePetByIdUseCaseInput from "./dtos/update.pet.by.id.usecase.input";
import UpdatePetByIdUseCaseOutPut from "./dtos/update.pet.by.id.usecase.output";
import { Inject, Injectable } from "@nestjs/common";
import IPetRepository from "../interfaces/pet.repository.interface";
import PetTokens from "../pet.tokens";
import PetNotFoundError from "src/domain/errors/pet.not.found.error";
import { Pet } from "../schemas/pet.schema";

@Injectable()
export class UpdatePetByIdUsecase implements IUseCase<UpdatePetByIdUseCaseInput, UpdatePetByIdUseCaseOutPut>{
    
    constructor(
        @Inject(PetTokens.petRepository)
        private readonly petRepository: IPetRepository
    ){ }
    
    async run (input: UpdatePetByIdUseCaseInput): Promise<UpdatePetByIdUseCaseOutPut>{
       
        let pet = await this.getPetById(input.id)

        if(!pet) {
            throw new PetNotFoundError()
        }
        await this.petRepository.updateById({
            ...input
        });

        pet = await this.getPetById(input.id)


        return new UpdatePetByIdUseCaseOutPut({
            id: pet._id,
            name: pet.name,
            type: pet.type,
            size: pet.size,
            gender: pet.gender,
            bio: pet.bio,
            photo: null,
            createdAt: pet.createdAt,
            updatedAt: pet.updatedAt,
        });
    }

    private async getPetById(id: string): Promise<Pet> {
        try {
            return await this.petRepository.getById(id)
        } catch (error) {
            return null
        }
    }
}