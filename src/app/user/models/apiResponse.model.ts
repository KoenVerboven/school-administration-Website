import { AuthResponseData } from "./authResponseData.model";

export interface ApiResponse{
    httpStatusCode : string,
    isSuccess:boolean,
    errorMessages: string[],
    result:AuthResponseData
}