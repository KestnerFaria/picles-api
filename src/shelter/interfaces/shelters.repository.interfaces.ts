import { promises } from "dns";
import { Shelter } from "../schemas/shelter.schema";

export default interface IShelterRepository{
    get(): promises<Shelter>
}