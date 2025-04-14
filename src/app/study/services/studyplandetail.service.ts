import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { StudyPlanDetail } from '../models/studyPlanDetail.model';

@Injectable({
    providedIn: 'root'
})
export class StudyplandetailService {
  
    private apiUrl = `${environment.apiUrl}/studyplanpart`
    
    constructor(private http: HttpClient) { }
  
    getStudyPlanDetailsFilter(): Observable<StudyPlanDetail[]>{
      return this.http.get<StudyPlanDetail[]>(`${this.apiUrl}/getStudyplanPartsFilter`)
    }

    //getStudyPlanDetailsFilter(startDate : Date): Observable<StudyPlanDetail[]>{
    //  return this.http.get<StudyPlanDetail[]>(`${this.apiUrl}/getStudyplanPartsFilter${startDate}`)
    //}

    getStudyPlanDetails(): Observable<StudyPlanDetail[]>{
      return this.http.get<StudyPlanDetail[]>(this.apiUrl)
    }
  
  }