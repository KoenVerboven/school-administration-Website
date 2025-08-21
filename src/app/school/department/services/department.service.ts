import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { SchoolDepartment } from '../../models/schooldepartment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private apiUrl = `${environment.apiUrl}/department`;    

  constructor(private http: HttpClient) { }

    getDepartments(): Observable<SchoolDepartment[]>{
      return this.http.get<SchoolDepartment[]>(this.apiUrl)
    }

    getDepartmentById(id : number): Observable<SchoolDepartment>{
      return this.http.get<SchoolDepartment>(`${this.apiUrl}/getById/${id}`)
    }

    createDepartement(departement : SchoolDepartment): Observable<SchoolDepartment>{
      return this.http.post<SchoolDepartment>(this.apiUrl,departement);
    }

    updateDepartment(department : SchoolDepartment):Observable<SchoolDepartment>{
        return this.http.put<SchoolDepartment>(`${this.apiUrl}/${department.id}`,department);
    }

    deleteDepartment(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
