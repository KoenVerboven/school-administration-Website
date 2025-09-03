import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Student } from '../models/student.model';
import { StudentSpecParams } from '../models/studentSpecParams.model';

@Injectable({
  providedIn: 'root'
})
export class StudentPresenceService {

    private apiUrl = `${environment.apiUrl}/StudentPresence`
    
    constructor(private http: HttpClient) { }
  
    getStudents(): Observable<Student[]>{
      return this.http.get<Student[]>(`${this.apiUrl}/getStudents`)
    }
  
}
