import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Course} from '../models/course';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = '${environment.apiUrl}/course';// todo  : put this in a seperat file

  constructor(private http : HttpClient) { }

  getCourses() : Observable<Course[]>{
    return this.http.get<Course[]>(this.apiUrl);
  }

}
