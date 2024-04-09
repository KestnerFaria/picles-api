import { Body, Post, Controller, Inject } from '@nestjs/common';
import CreatPetControllerInput from './dtos/creat.pet.controller.input';
import PetTokens from './pet.tokens';
import { IUseCase } from 'src/domain/iusecase.interface';
import CreatePetUseCaseInput from './usecases/dtos/create.pet.usecase.input';
import CreatePetUseCaseOutput from './usecases/dtos/create.pet.usecase.output';

@Controller('pet')
export class PetController {


    @Inject(PetTokens.createPetUseCase)
    private readonly creatPetUseCase: IUseCase<CreatePetUseCaseInput, CreatePetUseCaseOutput>

    @Post()
    async createPet(@Body() input: CreatPetControllerInput): Promise<CreatePetUseCaseOutput>{
    const useCaseInput = new
    CreatePetUseCaseInput({...input})
    return await this.creatPetUseCase.run(useCaseInput)
    }
}
