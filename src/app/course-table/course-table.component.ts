import { Component, OnInit } from '@angular/core';
import { Course} from '../../models/course';
import { CommonModule } from '@angular/common';
import { CourseService } from '../Services/course.service';

@Component({
  selector: 'app-course-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-table.component.html',
  styleUrl: './course-table.component.css'
})
export class CourseTableComponent implements OnInit{

  courses : Course[] =[]
  PageTitle: string = "Courses list"

  constructor(private courseService : CourseService){}

  ngOnInit(): void {
    this.getCourses();
  }

  
  getCourses():void{
    this.courseService.getCourses()
    .subscribe(coursesFromApi => this.courses = coursesFromApi);
  }
 
}
