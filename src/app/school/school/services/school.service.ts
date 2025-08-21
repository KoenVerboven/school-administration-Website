import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { School } from '../../models/school.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  private apiUrl = `${environment.apiUrl}/school`;

  constructor(private http: HttpClient) { }
  
   getSchools(): Observable<School[]>{
     return this.http.get<School[]>(this.apiUrl)
   }
    
   getSchoolById(id : number): Observable<School>{
     return this.http.get<School>(`${this.apiUrl}/getById/${id}`)
   }

   createSchool(school : School): Observable<School>{
      return this.http.post<School>(this.apiUrl,school);
   } 

   updateSchool(school : School):Observable<School>{
       return this.http.put<School>(`${this.apiUrl}/${school.id}`,school);
    }

    deleteSchool(id: number): Observable<void> {    
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
