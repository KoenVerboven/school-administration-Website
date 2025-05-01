import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import { LoginUser } from '../models/loginUser.model';
import { AuthResponseData } from '../models/authResponseData.model';
import { ApiResponse } from '../models/apiResponse.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public user = new Subject<AuthResponseData>();
  private apiUrl = `${environment.apiUrl}/user/login`  
    
  constructor(private http : HttpClient) { }
  
  userLogin(loginUser : LoginUser): Observable<ApiResponse>{
       return this.http.post<ApiResponse>(this.apiUrl,loginUser)
  }
 
}
