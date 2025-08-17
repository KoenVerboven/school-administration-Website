import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Teacher } from '../models/teacher.model';
import { TeacherService } from '../services/teacher.service'
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { DateAdapter } from '@angular/material/core';
import { GeneralFunctions } from '../../general/functions/generalfunctions';

@Component({
  selector: 'app-teacher-form',
  standalone: true,
  imports: [FormsModule, CommonModule, MatDatepickerModule,MatNativeDateModule,MatInputModule],
  templateUrl: './teacher-form.component.html',
  styleUrl: './teacher-form.component.css'
})
export class TeacherFormComponent implements OnInit {

  teacher: Teacher = {
      id: 0,
      firstName: '',
      lastName: '',
      dateOfBirth: new Date(),
      gender: 0,
      zipcode : 0,
      streetAndNumber:'',
      phone: '',
      email: '',
      hireDate:  new Date(),
      leaveDate: new Date()
    }
  
    isUpdating: boolean = false;
    disableControls: boolean = false;
    formAction : string = "true";
    errorMessage : string = "";
    pageTitle: string| null = "";
    teacherId: number = 0;
    genderData =[
      {"Id":1,"Name":"Male"},
      {"Id":2,"Name":"Female"}
    ];
   
    constructor(private teacherService : TeacherService,
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
      this.teacherId = Number(id);

      if(id){
        this.teacherService.getTeacherById(Number(id)).subscribe({
          next: result => this.teacher = result,
          error: err => this.errorMessage = `Error : (${err.status})`
        });
        this.isUpdating = true;
      }
      
      if(action == null){this.pageTitle = "Create teacher"}
        else if(action == "detail"){
          this.pageTitle = "Teacher detail";
          this.formAction = "detail";
          this.disableControls = true;
        }
        else if(action == "update"){this.pageTitle = "Update teacher"}

    });
  }


  onSubmit():void{

    let generalFunctions = new GeneralFunctions();
    this.teacher.dateOfBirth = generalFunctions.addHoursToDate(this.teacher.dateOfBirth,  2);
    this.teacher.hireDate = generalFunctions.addHoursToDate(this.teacher.hireDate, 2);
    if(this.isUpdating){
      //updating
      this.teacherService.updateTeacher(this.teacher)
      .subscribe({ 
        next: (response) =>{
          this.router.navigate(['/teachers'])
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = `Error occured during update : ${err.status}`;
        }
      });
    }
    else{
      //inserting
      this.teacherService.createTeacher(this.teacher)
      .subscribe({ 
        next: (response) =>{
          this.router.navigate(['/teachers'])
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
    this.router.navigateByUrl('/teachers')
  }

  updateClick()
  {
    this.formAction = "update";
    this.pageTitle = "Update teacher";
    this.disableControls = false;
  }

  deleteClick()
  {
    this.deleteTeacher(this.teacherId);
  }

  deleteTeacher(id : number) : void {
    this.teacherService.deleteTeacher(id).subscribe({
      next: (response) => {
        this.router.navigate(['/teachers']);
      },
      error: (err) => {
        console.error('Error deleting teacher',err);
      }
    });
  }

}
