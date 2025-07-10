import { Component, OnInit } from '@angular/core';
import { Course} from '../models/course.model';
import { CommonModule } from '@angular/common';
import { CourseService } from '../services/course.service';
import { Router , RouterModule} from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule,RouterModule, MatProgressSpinnerModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit{
  courses : Course[] =[]
  PageTitle: string = "Courses list"
  coursesCount = 0;
  loading = false;
  error = '';

  constructor(private courseService : CourseService, private router: Router){}

  ngOnInit(): void {
    this.getCourses();
  }
  
  getCourses():void{
    this.loading = true;
    this.courseService.getCourses().subscribe(coursesFromApi => {
        this.courses = coursesFromApi;
        this.coursesCount = this.courses.length;
        this.loading = false;
      },
      error => {
        this.error = 'An error has occurred. Please try again later.';
        console.log(error.message);
        this.loading = false;
      }
    ) 
  }
  
  showCourseDetail(id: number): void{
    this.router.navigate(['/coursedetail/detail', id])
  }

  addCourse(): void {
    this.router.navigate(['/createcourse']);
  }
 
}
