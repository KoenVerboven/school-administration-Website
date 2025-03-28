import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Course } from '../../models/course.model';
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
      startDate: new Date(),
      endDate: new Date(),
      coursePrice: 0,
      maxNumberOfStudents: 0
}

  isUpdating: boolean = false;
  disableControls: boolean = false;
  formAction : string = "true";
  errorMessage : string = "";
  pageTitle: string| null = "";
  courseId: number = 0;
   
    constructor(private courseService : CourseService,
      private router: Router,
      private route: ActivatedRoute
    ){}         

    ngOnInit(): void {
      this.route.paramMap.subscribe(result => {
      const id = result.get('id');
      const action = result.get('action');
      this.courseId = Number(id);

      if(id){
        this.courseService.getCourseById(Number(id)).subscribe({
        next: result => this.course = result,
        error: err => this.errorMessage = `Error : (${err.status})`
       });
       this.isUpdating = true;
      } 
      
      if(action == null){this.pageTitle = "Create course"}
        else if(action == "detail"){
          this.pageTitle = "Course detail";
          this.formAction = "detail";
          this.disableControls = true;
        }
        else if(action == "update"){this.pageTitle = "Update course"}
   
    });
  }

  onSubmit():void{

    if(this.isUpdating){
      //updating
      this.courseService.updateCourse(this.course)
      .subscribe({ 
        next: (response) =>{
          this.router.navigate(['/courses'])
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = `Error occured during update : ${err.status}`;
        }
      });
    }
    else{
      //inserting
      this.courseService.createCourse(this.course)
      .subscribe({ 
        next: (response) =>{
          this.router.navigate(['/courses'])
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = `Error occured during insert : ${err.status}`;
        }
      });
    }
  }

  navigateBack()
  {
    this.router.navigateByUrl('/courses')
  }

  updateClick()
  {
    this.formAction = "update";
    this.pageTitle = "Update course";
    this.disableControls = false;
  }

  deleteClick()
  {
    this.deleteCourse(this.courseId);
  }

  deleteCourse(id : number) : void {
    this.courseService.deleteCourse(id).subscribe({
      next: (response) => {
        this.router.navigate(['/courses']);
      },
      error: (err) => {
        console.error('Error deleting course',err);
      }
    });
  }


}
