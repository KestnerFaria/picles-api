import { IUseCase } from "src/domain/iusecase.interface";
import GetShelterDetailsUseCaseOutput from "./dtos/get.shelter.details.usecase.output";

export default class GetShelterdetailsUseCase implements IUseCase<null, GetShelterDetailsUseCaseOutput> {
    run(input: null): Promise<GetShelterDetailsUseCaseOutput> {
        return Promise.resolve(new GetShelterDetailsUseCaseOutput({
            shelterName: 'Abrigo Bigo',
            shelterEmail: 'abb@gmail.com',
            shelterPhone: '199818182819',
            shelterWatsapp: '199818182819',
            createAt: new Date(),
            updatedAt: new Date()
        }))
    }
    
}