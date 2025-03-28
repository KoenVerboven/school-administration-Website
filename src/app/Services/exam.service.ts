import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Exam } from '../models/exam.model';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private apiUrl = `${environment.apiUrl}/exam`
  
  constructor(private http: HttpClient) { }

  getExams(): Observable<Exam[]>{
      return this.http.get<Exam[]>(this.apiUrl)
  }

  getExamById(id : number): Observable<Exam>{
      return this.http.get<Exam>(`${this.apiUrl}/${id}`)
  }
   
   createExam(exam : Exam): Observable<Exam>{
      return this.http.post<Exam>(this.apiUrl,exam);
  }
   
  deleteExam(id : number) : Observable<void>{
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
   
  updateExam(exam: Exam):Observable<Exam>{
      return this.http.put<Exam>(`${this.apiUrl}/${exam.id}`,exam);
  }

}
