import { Component } from '@angular/core';
import { Teacher } from '../models/teacher.model'; 
import { TeacherService } from '../services/teacher.service';
import { CommonModule } from '@angular/common';
import { Router , RouterModule} from '@angular/router';

@Component({
  selector: 'app-teacher-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.css'
})
export class TeacherListComponent {
teachers: Teacher[] = [];
teachersCount = 0;

  constructor(private teacherService: TeacherService, private router: Router){}

  ngOnInit(){
    this.getTeachers("name");
  }
 
  showTeacherDetail(id: number): void{
    this.router.navigate(['/teacherdetail/detail', id]) 
  }

  getTeachers(sort: string){
    this.teacherService.getTeachersSort(sort).subscribe((data: Teacher[]) =>{
      this.teachers = data;
      this.teachersCount = this.teachers.length;
      console.log(data);
  });
  }


}
