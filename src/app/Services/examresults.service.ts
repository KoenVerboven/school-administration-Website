import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ExamResult } from '../../models/examResult';

@Injectable({
  providedIn: 'root'
})
export class ExamResultsService {

   private apiUrl = `${environment.apiUrl}/student/GetStudentsExamResults`  
  
  constructor(private http: HttpClient) { }

  getStudentsExamResults(): Observable<ExamResult[]>{
    return this.http.get<ExamResult[]>(this.apiUrl)
  }

}
