import { Component } from '@angular/core';
import { Teacher } from '../../../models/teacher'; 
import { TeacherService } from '../../Services/teacher.service';
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

  constructor(private teacherService: TeacherService, private router: Router){}

  ngOnInit(){
    this.teacherService.getTeachers().subscribe((data: Teacher[]) =>{
        this.teachers = data;
        console.log(data);
    });
  }
}
