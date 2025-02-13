import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import {Observable} from 'rxjs';
import {Course} from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = `${environment.apiUrl}/course`  // todo  : put this in a seperat file

  constructor(private http : HttpClient) { }

  getCourses() : Observable<Course[]>{
    return this.http.get<Course[]>(this.apiUrl);
  }

}
