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
}
