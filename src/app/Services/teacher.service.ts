import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Teacher } from '../../models/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private apiUrl = `${environment.apiUrl}/teacher`
    
    constructor(private http: HttpClient) { }
  
    getTeachers(): Observable<Teacher[]>{
      return this.http.get<Teacher[]>(this.apiUrl)
    }

    getTeacherById(id : number): Observable<Teacher>{
      return this.http.get<Teacher>(`${this.apiUrl}/${id}`)
    }

}
