import { Component, OnInit } from '@angular/core';
import { Student } from '../../../models/student'; 
import { StudentService } from '../../Services/student.service';
import { CommonModule } from '@angular/common';
import { Router , RouterModule} from '@angular/router';

@Component({
  selector: 'student-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
 
  students: Student[] = [];

  constructor(private studentService: StudentService, private router: Router){}

  ngOnInit(){
    this.studentService.getStudents().subscribe((data: Student[]) =>{
        this.students = data;
        console.log(data);
    });
  }

  showStudentDetail(id: number): void{
    this.router.navigate(['/studentdetail/detail', id])
  }

}
