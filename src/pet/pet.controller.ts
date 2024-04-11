import { Body, Post, Controller, Inject, Get, Param, BadRequestException, Patch, Put, Delete } from '@nestjs/common';
import CreatPetControllerInput from './dtos/creat.pet.controller.input';
import PetTokens from './pet.tokens';
import { IUseCase } from 'src/domain/iusecase.interface';
import CreatePetUseCaseInput from './usecases/dtos/create.pet.usecase.input';
import CreatePetUseCaseOutput from './usecases/dtos/create.pet.usecase.output';
import GetPetByIdUseCaseInput from './usecases/dtos/get.pet.by.id.usecase.input';
import GetPetByIdUseCaseOutPut from './usecases/dtos/get.pet.by.id.usecase.output';
import UpdatePetControllerInput from './dtos/update.pet.controller.input';
import UpdatePetByIdUseCaseInput from './usecases/dtos/update.pet.by.id.usecase.input';
import UpdatePetByIdUseCaseOutPut from './usecases/dtos/update.pet.by.id.usecase.output';
import DeletePetByIdUseCaseInput from './usecases/dtos/delete.pet.by.id.usecase.input';
import DeletePetByIdUseCaseOutPut from './usecases/dtos/delete.pet.by.id.usecase.output';

@Controller('pet')
export class PetController {


    @Inject(PetTokens.createPetUseCase)
    private readonly creatPetUseCase: IUseCase<CreatePetUseCaseInput, CreatePetUseCaseOutput>

    @Inject(PetTokens.getPetByIdUseCase)
    private readonly getPetByIdUseCase: IUseCase<GetPetByIdUseCaseInput, GetPetByIdUseCaseOutPut>

    @Inject(PetTokens.updatePetByIdUseCase)
    private readonly UpdatePetByIdUseCase: IUseCase<UpdatePetByIdUseCaseInput, UpdatePetByIdUseCaseOutPut>

    @Inject(PetTokens.deletePetByIdUseCase)
    private readonly DeletePetByIdUseCase: IUseCase<DeletePetByIdUseCaseInput, DeletePetByIdUseCaseOutPut>

    @Post()
    async createPet(@Body() input: CreatPetControllerInput): Promise<CreatePetUseCaseOutput>{
    const useCaseInput = new
    CreatePetUseCaseInput({...input})
    return await this.creatPetUseCase.run(useCaseInput)
    }

    @Get('id')
    async getPetById(@Param('id') id:string ): Promise<GetPetByIdUseCaseOutPut>{
       try{
        const useCaseInput = new GetPetByIdUseCaseInput({id})
        return await this.getPetByIdUseCase.run(useCaseInput)
       } catch (error){
        throw new BadRequestException(JSON.parse(error.message))
       }
        
    }

    @Put(':id')
    async updatePet(@Body() input: UpdatePetControllerInput, @Param('id') id:string ): Promise<UpdatePetByIdUseCaseOutPut>{
        const useCaseInput = new UpdatePetByIdUseCaseInput({
            ...input,
            id
        })
        try{
            const useCaseInput = new GetPetByIdUseCaseInput({id})
            return await this.getPetByIdUseCase.run(useCaseInput)
           } catch (error){
            throw new BadRequestException(JSON.parse(error.message))
           }
        
    }

    @Delete(':id')
    async deletePet(@Param('id') id : string): Promise<DeletePetByIdUseCaseOutPut>{
        try {
            const useCaseInput = new DeletePetByIdUseCaseInput({ id })
            return await this.DeletePetByIdUseCase.run(useCaseInput)
        } catch (error) {
            throw new BadRequestException(JSON.parse(error.message))
        }
    }

    

}
