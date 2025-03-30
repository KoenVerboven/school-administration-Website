import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Course} from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = `${environment.apiUrl}/course`  // todo  : put this in a seperat file

  constructor(private http : HttpClient) { }

  getCourses() : Observable<Course[]>{
    return this.http.get<Course[]>(this.apiUrl);
  }

  getCourseById(id : number): Observable<Course>{
    return this.http.get<Course>(`${this.apiUrl}/getById/${id}`)
  }

  createCourse(course : Course): Observable<Course>{
    return this.http.post<Course>(this.apiUrl,course);
  }

  deleteCourse(id : number) : Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateCourse(course: Course):Observable<Course>{
    return this.http.put<Course>(`${this.apiUrl}/${course.id}`,course);
  }

}
