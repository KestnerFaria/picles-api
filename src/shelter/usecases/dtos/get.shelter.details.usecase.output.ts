export default class GetShelterDetailsUseCaseOutput{
    shelterName: string;
    shelterWatsapp: string;
    shelterEmail: string;
    shelterPhone: string;
    createAt: Date;
    updatedAt: Date;

    constructor(data: Partial<GetShelterDetailsUseCaseOutput>){
        Object.assign(this, data)
    }
}