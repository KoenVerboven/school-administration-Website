import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { StudyPlan } from '../models/studyPlan.model';

@Injectable({
  providedIn: 'root'
})
export class StudyplanService {

  private apiUrl = `${environment.apiUrl}/studyplan`
  
  constructor(private http: HttpClient) { }

  getStudyPlans(): Observable<StudyPlan[]>{
    return this.http.get<StudyPlan[]>(this.apiUrl)
  }

  getStudyPlanById(id : number): Observable<StudyPlan>{
      return this.http.get<StudyPlan>(`${this.apiUrl}/${id}`)
    }
  
    createStudyPlan(course : StudyPlan): Observable<StudyPlan>{
      return this.http.post<StudyPlan>(this.apiUrl,course);
    }
  
    deleteStudyPlan(id : number) : Observable<void>{
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
  
    updateStudyPlan(studyPlan: StudyPlan):Observable<StudyPlan>{
      return this.http.put<StudyPlan>(`${this.apiUrl}/${studyPlan.id}`,studyPlan);
    }

}
