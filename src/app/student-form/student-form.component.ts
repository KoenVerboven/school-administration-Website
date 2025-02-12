import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../../models/student';
import { StudentService } from '../student.service';
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent implements OnInit {

  student: Student = {
    id: 0,
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  }

  isUpdating: boolean = false;
  disableControls: boolean = false;
  formAction : string = "true";
  errorMessage : string = "";
  pageTitle: string| null = "";

  constructor(private studentService : StudentService, 
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(result => {
        const id = result.get('id');
        const action = result.get('action');
       

        if(action == null){this.pageTitle = "Create student"}
        else if(action == "detail"){
          this.pageTitle = "Student detail";
          this.formAction = "detail";
          this.disableControls = true;
        }
        else if(action == "update"){this.pageTitle = "Update student"}
        // alert(this.action);

        if(id){
          this.isUpdating = true;
          //console.log("Is updating");
          this.studentService.getStudentById(Number(id)).subscribe({
            next: result => this.student = result,
            error: err => this.errorMessage = `Error : (${err.status})`
          })
        }
      
     });
  }

  onSubmit():void{

    if(this.isUpdating){
      //updating
      this.studentService.updateStudent(this.student)
      .subscribe({ 
        next: (response) =>{
          this.router.navigate(['/'])
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = `Error occured during update : ${err.status}`;
        }
      });
    }
    else{
      //inserting
      this.studentService.createStudent(this.student)
      .subscribe({ 
        next: (response) =>{
          this.router.navigate(['/'])
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = `Error occured during insert : ${err.status}`;
        }
      });
    }
    
  }

}
