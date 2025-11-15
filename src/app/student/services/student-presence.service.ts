import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Student } from '../models/student.model';
import { StudentPresence } from '../models/studentPresence.model';
import { SchoolClass } from '../models/schoolclass.models';

@Injectable({
  providedIn: 'root'
})
export class StudentPresenceService {

  private apiUrl = `${environment.apiUrl}/StudentPresence`
    
  constructor(private http: HttpClient) { }
  
  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(`${this.apiUrl}/getStudents`)
    }

    /*
     getStudentsPresenceByClassAndDate(schoolClassId: number, date: string): Observable<StudentPresence[]>{  
      let params = new HttpParams();
      params = params.append('schoolClassId', schoolClassId.toString());
      params = params.append('date', date);
      return this.http.get<StudentPresence[]>(`${this.apiUrl}/GetStudentsPresenceByClassAndDate`, {params: params});
    }
    */
   
  getClassesBySchoolId(id : number): Observable<SchoolClass[]>{
      return this.http.get<SchoolClass[]>(`${this.apiUrl}/getSchoolClasses?ShoolId={id}`)
   }

  AddStudentsPresence(studentsPresences : StudentPresence[]): Observable<StudentPresence[]>{
    return this.http.post<StudentPresence[]>(`${this.apiUrl}/addStudentsPresenceList`,studentsPresences);
  }
  
}
