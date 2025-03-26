import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../../../models/student';
import { StudentService } from '../../Services/student.service'
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [FormsModule, CommonModule,MatDatepickerModule,MatNativeDateModule,MatInputModule,MatFormFieldModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent implements OnInit {

  student: Student = {
    id: 0,
    firstName: '',
    lastName: '',
    dateOfBirth: new Date(),
    gender:0,
    zipcode:0,
    streetAndNumber: '',
    phone: '',
    email: ''
  }

  geboortedate : string| undefined;

  isUpdating: boolean = false;
  disableControls: boolean = false;
  formAction : string = "true";
  errorMessage : string = "";
  pageTitle: string| null = "";
  studentId: number = 0;
  genderData: any;

  events: string[] = [];

  constructor(private studentService : StudentService, 
    private router: Router,
    private route: ActivatedRoute,
    private dateAdapter: DateAdapter<Date>
  ){
      this.dateAdapter.setLocale('nl-BE'); 
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(result => {
        const id = result.get('id');
        const action = result.get('action');
        this.studentId = Number(id);
               
        if(id){
          this.studentService.getStudentById(Number(id)).subscribe({
            next: result => this.student = result,
            error: err => this.errorMessage = `Error : (${err.status})`
          });
          this.isUpdating = true;
        }

        this.populateGenderData();

        if(action == null){this.pageTitle = "Create student"}
        else if(action == "detail"){
          this.pageTitle = "Student detail";
          this.formAction = "detail";
          this.disableControls = true;
        }
        else if(action == "update"){
          this.pageTitle = "Update student";
        }
    
     });
  }
  
  addHours(date: Date, hours : number):Date {
    const hoursToAdd = hours * 60 * 60 * 1000;
    date.setTime(date.getTime() + hoursToAdd);
    return date;
  }


  onSubmit():void{
    this.student.dateOfBirth = this.addHours(this.student.dateOfBirth, 2);
    if(this.isUpdating){
       this.studentService.updateStudent(this.student)
      .subscribe({ 
        next: (response) =>{
          this.router.navigate(['/students'])
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = `Error occured during update : ${err.status}`;
        }
      });
    }
    else{
      this.studentService.createStudent(this.student)
      .subscribe({ 
        next: (response) =>{
          this.router.navigate(['/students'])
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = `Error occured during insert : ${err.status}`;
        }
      });
    }
  }

  populateGenderData()
  {
    this.genderData=[
      {
        "Id":1,
        "Name":"Male"
      },
      {
        "Id":2,
        "Name":"Female"
      }
    ]
  }
 
  navigateBack()
  {
    this.router.navigateByUrl('/students')
  }

  updateClick()
  {
    this.formAction = "update";
    this.pageTitle = "Update student";
    this.disableControls = false;
  }

  deleteClick()
  {
    this.deleteStudent(this.studentId);
  }

  deleteStudent(id : number) : void {
    this.studentService.deleteStudent(id).subscribe({
      next: (response) => {
        this.router.navigate(['/students']);
      },
      error: (err) => {
        console.error('Error deleting student',err);
      }
    });
  }

}
