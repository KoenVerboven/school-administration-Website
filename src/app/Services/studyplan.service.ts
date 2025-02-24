import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { StudyPlan } from '../../models/studyPlan';

@Injectable({
  providedIn: 'root'
})
export class StudyplanService {

  private apiUrl = `${environment.apiUrl}/studyplan`
  
  constructor(private http: HttpClient) { }

  getStudyPlans(): Observable<StudyPlan[]>{
    return this.http.get<StudyPlan[]>(this.apiUrl)
  }

}
