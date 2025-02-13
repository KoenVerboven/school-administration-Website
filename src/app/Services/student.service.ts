import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Student } from '../../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = `${environment.apiUrl}/student`
  
  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.apiUrl)
  }

  getStudentById(id : number): Observable<Student>{
    return this.http.get<Student>(`${this.apiUrl}/${id}`)
  }

  createStudent(student : Student): Observable<Student>{
    return this.http.post<Student>(this.apiUrl,student);
  }

  deleteStudent(id : number) : Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateStudent(student: Student):Observable<Student>{
    return this.http.put<Student>(`${this.apiUrl}/${student.id}`,student);
  }

}
