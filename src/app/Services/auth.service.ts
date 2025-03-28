import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {Observable} from 'rxjs';
import { LoginUser } from '../models/loginUser.model';
import { AuthResponseData } from '../models/authResponseData.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.apiUrl}/user`  
  
    constructor(private http : HttpClient) { }
  
    userLogin(loginUser : LoginUser): Observable<AuthResponseData>{
       return this.http.post<AuthResponseData>(this.apiUrl,loginUser)
    }
}
