import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../models/student.model';
import { StudentService } from '../services/student.service'
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DateAdapter } from '@angular/material/core';
import { GeneralFunctions } from '../../general/functions/generalfunctions';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [FormsModule, CommonModule,MatDatepickerModule,MatNativeDateModule,MatInputModule,MatFormFieldModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent implements OnInit {
clearPicture() {
throw new Error('Method not implemented.');
}
onFileSelected($event: Event) {
throw new Error('Method not implemented.');
}

  geboortedate : string| undefined;
  isUpdating: boolean = false;
  disableControls: boolean = false;
  formAction : string = "true";
  errorMessage : string = "";
  pageTitle: string| null = "";
  studentId: number = 0;
   noPictureUrl: string = "/StudentPictures/NoPicture.jpg";
  genderData =[
    {"Id":1,"Name":"Male"},
     {"Id":2,"Name":"Female"}
    ];
  events: string[] = [];
  student: Student = {
    id: 0,
    firstName: '',
    lastName: '',
    dateOfBirth: new Date(),
    gender:0,
    zipcode:0,
    streetAndNumber: '',
    phone: '',
    email: '',
    picture : ''
  }

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
  

  onSubmit():void{
    let generalFunctions = new GeneralFunctions();
    this.student.dateOfBirth = generalFunctions.addHoursToDate(this.student.dateOfBirth, 2);
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
