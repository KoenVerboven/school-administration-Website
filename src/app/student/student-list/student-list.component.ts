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
import { StudentSpecParams } from '../models/studentSpecParams.model';

@Component({
  selector: 'student-list',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
 
  students: Student[] = [];
  searchName: string = '';
  studentsCount = -1;
  loading = false;
  error = '';
  studentSpecParams: StudentSpecParams ={
     sort:'name',
     pageSize:5,
     pageNumber:1,
     name: '',
     email:'',
     zipcode: 0
  }

  constructor(private studentService: StudentService, private router: Router){}

  ngOnInit(): void {
    this.studentService.searchNameText.subscribe({
          next:(data) =>{
            this.searchName = data
          }
    });
    if(this.searchName != '')
    {
      this.getStudents();
    }
   }

  showStudentDetail(id: number): void{
      this.studentService.searchNameText.next(this.searchName);
      this.router.navigate(['/studentdetail/detail', id])
  }

  clearSearch()
  {
    this.searchName = '';
    this.studentService.searchNameText.next('');
  }

  /*
getStudents()
  {
    if(this.searchName.trim() != '')
    {
      this.loading = true;
      alert('bingo');
      this.studentService.getStudentByFilter(this.studentSpecParams).subscribe((data: Student[]) => {
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
  */

 
 getStudents()
  {
    if(this.searchName.trim() != '')
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

}
