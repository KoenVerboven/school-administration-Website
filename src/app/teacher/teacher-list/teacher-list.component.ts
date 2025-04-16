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

  constructor(private teacherService: TeacherService, private router: Router){}

  ngOnInit(){
    this.getTeachers("name");
  }
 
  showTeacherDetail(id: number): void{
    this.router.navigate(['/teacherdetail/detail', id]) 
  }

  getTeachers(sort: string){
    this.loading = true;
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
  }


}
