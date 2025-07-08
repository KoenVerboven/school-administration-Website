import { Component } from '@angular/core';
import { Teacher } from '../models/teacher.model'; 
import { TeacherService } from '../services/teacher.service';
import { CommonModule } from '@angular/common';
import { Router , RouterModule} from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-teacher-list',
  standalone: true,
  imports: [CommonModule,RouterModule, MatProgressSpinnerModule],
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.css'
})
export class TeacherListComponent {
teachers: Teacher[] = [];
teachersCount = 0;
loading = false;
error = '';
sortDirection = 'asc';
sortId = false;
sortName = false;
sortDateOfBirth = false;
sortPhone = false;
sortEmail = false;
previousSort = '';

  constructor(private teacherService: TeacherService, private router: Router){}

  ngOnInit(){
    this.getTeachers("name");
  }
 
  showTeacherDetail(id: number): void{
    this.router.navigate(['/teacherdetail/detail', id]) 
  }

  getTeachers(sort: string){
    this.loading = true;
    this.sortDirection = "asc";
    
    this.sortId = false;
    if(sort == "id")
    {
      this.sortId = true;
      if(this.previousSort == 'id')
      {
        sort = 'id_desc';
        this.sortDirection = 'desc';
      }
    }
    this.sortName = false;
    if(sort == "name")
    {
      this.sortName = true;
      if(this.previousSort == 'name')
      {
        sort = 'name_desc';
        this.sortDirection = 'desc';
      }
    }
    this.sortDateOfBirth = false;
    if(sort == "dateofbirth")
    {
      this.sortDateOfBirth = true;
      if(this.previousSort == 'dateofbirth')
      {
        sort = 'dateofbirth_desc';
        this.sortDirection = 'desc';
      }
    }
    this.sortPhone = false;
    if(sort == "phone")
    {
      this.sortPhone = true;
      if(this.previousSort == 'phone')
      {
        sort = 'phone_desc';
        this.sortDirection = 'desc';
      }
    }
    this.sortEmail = false;
    if(sort == "email")
    {
       this.sortEmail = true;
      if(this.previousSort == 'email')
      {
        sort = 'email_desc';
        this.sortDirection = 'desc';
      }
    }


    this.teacherService.getTeachersSort(sort).subscribe((data: Teacher[]) =>{
      this.teachers = data;
      this.teachersCount = this.teachers.length;
      this.loading = false;
     },
     error => {
      this.error = 'An error has occurred. Please try again later.';
      console.log(error.message);
      this.loading = false;
     }
   );
   this.previousSort = sort;
  }

addTeacher() {
  this.router.navigate(['/createteacher']);
}


}
