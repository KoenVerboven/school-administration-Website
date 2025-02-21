import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Exam } from '../../models/exam';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private apiUrl = `${environment.apiUrl}/exam`
  
  constructor(private http: HttpClient) { }

  getExams(): Observable<Exam[]>{
      return this.http.get<Exam[]>(this.apiUrl)
    }
}
