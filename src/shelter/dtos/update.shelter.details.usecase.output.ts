export default class UpdateShelterDetailsUseCaseOutput{
    name: string;
    whatsapp: string;
    email: string;
    phone: string;
    createAt: Date;
    updateAt: Date;

    constructor(data: Partial<UpdateShelterDetailsUseCaseOutput>){
        Object.assign(this,data);
    }
}