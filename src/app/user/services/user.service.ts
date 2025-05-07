import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { UserDTO } from '../models/userDTO.model';
import { User } from '../models/user.model';  

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = `${environment.apiUrl}/user`
  
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl)
  }

  getUserById(id : string): Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/${id}`)
  }

  createUser(user : User): Observable<User>{
     return this.http.post<User>(this.apiUrl + '/register',user);
  }

}
