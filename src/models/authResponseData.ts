import { UserDTO } from "./userDTO";

export interface AuthResponseData{
    user: UserDTO;
    role: string;
    token: string;
}