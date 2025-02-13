import { Component } from '@angular/core';
import { Course} from '../../models/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-table.component.html',
  styleUrl: './course-table.component.css'
})
export class CourseTableComponent {
  PageTitle: string = "Courses list"
  
  courses : Course[] =[
    {id:1,courseName: "piano",courseCode : "p1",courseDescription : "",maxNumberOfStudents: 10},
    {id:2,courseName: "sterrenkijken",courseCode : "s1",courseDescription : "",maxNumberOfStudents: 20},
    {id:3,courseName: "planetenkijken",courseCode : "pk1",courseDescription : "",maxNumberOfStudents: 30}
  ]
  
  
   

}
