import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Teacher } from '../models/teacher.model'

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private apiUrl = `${environment.apiUrl}/teacher`
    
    constructor(private http: HttpClient) { }
  
    getTeachers(): Observable<Teacher[]>{
      return this.http.get<Teacher[]>(this.apiUrl)
    }

    getTeachersSort(sort: string): Observable<Teacher[]>{
      return this.http.get<Teacher[]>(`${this.apiUrl}/getAllTeachersSort/${sort}`)
    }

    getTeacherById(id : number): Observable<Teacher>{
      return this.http.get<Teacher>(`${this.apiUrl}/${id}`)
    }

    createTeacher(teacher : Teacher): Observable<Teacher>{
      return this.http.post<Teacher>(this.apiUrl,teacher);
    }
    
    deleteTeacher(id : number) : Observable<void>{
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
    
    updateTeacher(teacher: Teacher):Observable<Teacher>{
      return this.http.put<Teacher>(`${this.apiUrl}/${teacher.id}`,teacher);
    }

}
