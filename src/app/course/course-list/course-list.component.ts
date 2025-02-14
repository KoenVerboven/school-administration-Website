import { Component, OnInit } from '@angular/core';
import { Course} from '../../../models/course';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../Services/course.service';
import { Router , RouterModule} from '@angular/router';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit{

  courses : Course[] =[]
  PageTitle: string = "Courses list"

  constructor(private courseService : CourseService, private router: Router){}

  ngOnInit(): void {
    this.getCourses();
  }
  
  getCourses():void{
    this.courseService.getCourses()
    .subscribe(coursesFromApi => this.courses = coursesFromApi);
  }

  showCourseDetail(id: number): void{
    this.router.navigate(['/coursedetail/detail', id])
  }
 
}
