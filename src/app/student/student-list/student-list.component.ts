import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../models/student.model'; 
import { StudentService } from '../services/student.service';
import { CommonModule } from '@angular/common';
import { Router , RouterModule} from '@angular/router';

@Component({
  selector: 'student-list',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
 
  students: Student[] = [];
  searchName: string = '';

  constructor(private studentService: StudentService, private router: Router){}

  ngOnInit(){
    this.getStudents();
  }

  showStudentDetail(id: number): void{
    this.router.navigate(['/studentdetail/detail', id])
  }

  getStudents()
  {
    this.studentService.getStudentByNameStartWith(this.searchName).subscribe((data: Student[]) =>{
      this.students = data;
      console.log(data);
    });
  }

}
