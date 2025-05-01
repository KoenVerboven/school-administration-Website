import { UserDTO } from "./userDTO.model";

export interface AuthResponseData{
    user: UserDTO;
    role: string;
    token: string;


   
}