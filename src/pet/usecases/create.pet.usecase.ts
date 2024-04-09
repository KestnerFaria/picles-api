import { IUseCase } from "src/domain/iusecase.interface";
import CreatePetUseCaseOutput from "./dtos/create.pet.usecase.output";
import { Injectable } from "@nestjs/common";
import CreatePetUseCaseInput from "./dtos/create.pet.usecase.input";

@Injectable()
export default class CreatePetUseCase implements IUseCase<CreatePetUseCaseInput, CreatePetUseCaseOutput>{
    run(input: CreatePetUseCaseInput): Promise<CreatePetUseCaseOutput> {
        throw new Error("Method not implemented.");
    }
    
}