import { Injectable } from "@nestjs/common";
import { IUseCase } from "src/domain/iusecase.interface";
import updateShelterDetailsUseCaseOutput from "../dtos/update.shelter.details.usecase.output";
import updateShelterDetailsUseCaseInput from "../dtos/update.shelter.details.usecase.input";

@Injectable()
export default class updateShelterDetailsUseCase implements IUseCase<updateShelterDetailsUseCaseInput, updateShelterDetailsUseCaseOutput>
{
    run(input: updateShelterDetailsUseCaseInput): Promise<updateShelterDetailsUseCaseOutput> {
        throw new Error("Method not implemented");
    }
}
