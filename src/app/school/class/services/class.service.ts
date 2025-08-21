import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { SchoolClass } from '../../models/schoolclass.model';


@Injectable({
  providedIn: 'root'
})
export class ClassService {

  private apiUrl = `${environment.apiUrl}/class`;

  constructor(private http: HttpClient) { }
   
  getClasses(): Observable<SchoolClass[]>{
    return this.http.get<SchoolClass[]>(this.apiUrl)
  }
   
  getClassById(id : number): Observable<SchoolClass>{
    return this.http.get<SchoolClass>(`${this.apiUrl}/getById/${id}`)
  }

  createClass(schoolclass : SchoolClass): Observable<SchoolClass>{
    return this.http.post<SchoolClass>(this.apiUrl,schoolclass);
  }

  updateClass(schoolclass : SchoolClass):Observable<SchoolClass>{
    return this.http.put<SchoolClass>(`${this.apiUrl}/${schoolclass.id}`,schoolclass);
  }

  deleteClass(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
