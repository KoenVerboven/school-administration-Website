import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { Student } from '../models/student.model';
import { StudentSpecParams } from '../models/studentSpecParams.model';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  public searchNameText = new Subject<string>();

  private apiUrl = `${environment.apiUrl}/student`
  
  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.apiUrl)
  }

  getStudentByNameStartWith(name : string): Observable<Student[]>{
    return this.http.get<Student[]>(`${this.apiUrl}/getByNameStartWith/${name}`)
  }

  getStudentByFilter(studentSpecParams: StudentSpecParams): Observable<Student[]>{
    return this.http.get<Student[]>(`${this.apiUrl}/getStudentByFilter/${studentSpecParams}`)
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

  getStudentCount()
  {
    return this.http.get<number>(`${this.apiUrl}/getStudentCount`)
  }

}
