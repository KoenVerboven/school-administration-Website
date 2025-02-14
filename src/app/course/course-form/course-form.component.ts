import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Course } from '../../../models/course';
import { CourseService } from '../../Services/course.service'
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.css'
})
export class CourseFormComponent  implements OnInit{

course: Course = {
      id: 0,
      courseName: '',
      courseCode: '',
      courseDescription: '',
      maxNumberOfStudents: 0
}

 isUpdating: boolean = false;
    disableControls: boolean = false;
    formAction : string = "true";
    errorMessage : string = "";
    pageTitle: string| null = "";
   
    constructor(private courseService : CourseService,
      private router: Router,
      private route: ActivatedRoute
    ){}         

    ngOnInit(): void {
      this.route.paramMap.subscribe(result => {
      const id = result.get('id');
      //alert(id);
      const action = result.get('action');
      
      if(action == null){this.pageTitle = "Create course"}
        else if(action == "detail"){
          this.pageTitle = "Course detail";
          this.formAction = "detail";
          this.disableControls = true;
        }

        if(id){
          this.isUpdating = true;
          this.courseService.getCourseById(Number(id)).subscribe({
            next: result => this.course = result,
            error: err => this.errorMessage = `Error : (${err.status})`
          })
        }
    
    });
  }

}
