import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Teacher } from '../../../models/teacher';
import { TeacherService } from '../../Services/teacher.service'
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './teacher-form.component.html',
  styleUrl: './teacher-form.component.css'
})
export class TeacherFormComponent implements OnInit {

  teacher: Teacher = {
      id: 0,
      firstName: '',
      lastName: '',
      gender: 0,
      zipcode : 0,
      streetAndNumber:'',
      phone: '',
      email: ''
    }

    isUpdating: boolean = false;
    disableControls: boolean = false;
    formAction : string = "true";
    errorMessage : string = "";
    pageTitle: string| null = "";
    teacherId: number = 0;
    genderData: any;
   
    constructor(private teacherService : TeacherService,
      private router: Router,
      private route: ActivatedRoute
    ){}         

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

      this.populateGenderData();
      
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
