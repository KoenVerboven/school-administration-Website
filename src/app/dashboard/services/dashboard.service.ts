import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
 
  private apiUrl = `${environment.apiUrl}/dashboard`
  
  constructor(private http: HttpClient) { }

  getStudentCount(): Observable<number>{
    return this.http.get<number>(`${this.apiUrl}/getStudentCount`)
  }

  getTeacherCount(): Observable<number>{
    return this.http.get<number>(`${this.apiUrl}/getTeacherCount`)
  }

  getUserCount(): Observable<number>{
    return this.http.get<number>(`${this.apiUrl}/getUserCount`)
  }

  getCourseCount(): Observable<number>{
    return this.http.get<number>(`${this.apiUrl}/getCourseCount`)
  }

  getExamCount(): Observable<number>{
    return this.http.get<number>(`${this.apiUrl}/getExamCount`)
  }

}
