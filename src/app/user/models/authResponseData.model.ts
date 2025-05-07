import { UserDTO } from "./userDTO.model";

export interface AuthResponseData{
    id: string;
    userName: string;
    name: string;
    email:string;
    role: string;
    token: string;
}