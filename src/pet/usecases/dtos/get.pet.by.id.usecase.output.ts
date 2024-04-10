export default class GetPetByIdUseCaseOutPut{
    id: string;
    name: string;
    type: string;
    size: string;
    gender: string;
    bio: string;
    photo: string;
    createdAt: Date;
    updatedAt: Date;
    
    constructor(data: Partial<GetPetByIdUseCaseOutPut>) {
        Object.assign(this, data);
    }
}