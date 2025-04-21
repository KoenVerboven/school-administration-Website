import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {Observable} from 'rxjs';
import { LoginUser } from '../models/loginUser.model';
import { AuthResponseData } from '../models/authResponseData.model';
import { ApiResponse } from '../models/apiResponse.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private apiUrl = `${environment.apiUrl}/UserAuth/login`  
    
  constructor(private http : HttpClient) { }
  
  userLogin(loginUser : LoginUser): Observable<ApiResponse>{
       return this.http.post<ApiResponse>(this.apiUrl,loginUser)
  }

 // userLogin(loginUser : LoginUser): Observable<AuthResponseData>{
 //   return this.http.post<AuthResponseData>(this.apiUrl,loginUser)
  //}
}
