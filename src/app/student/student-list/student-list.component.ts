import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../models/student.model'; 
import { StudentService } from '../services/student.service';
import { CommonModule } from '@angular/common';
import { Router , RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'student-list',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
 
  students: Student[] = [];
  searchName: string = '';
  studentsCount = -1;
  loading = false;
  error = '';

  constructor(private studentService: StudentService, private router: Router){}

  showStudentDetail(id: number): void{
    this.router.navigate(['/studentdetail/detail', id])
  }

  getStudents()
  {
    this.loading = true;
    this.studentService.getStudentByNameStartWith(this.searchName).subscribe((data: Student[]) => {
        this.students = data;
        this.studentsCount = this.students.length;
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
