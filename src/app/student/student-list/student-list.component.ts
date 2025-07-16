import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../models/student.model'; 
import { StudentService } from '../services/student.service';
import { CommonModule } from '@angular/common';
import { Router , RouterModule} from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
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
  studentsCount = -1;
  list: number[] = [];
  loading = false;
  error = '';
  sortDirection = 'asc';
  sortId = false;
  sortName = false;
  sortDateOfBirth = false;
  sortPhone = false;
  sortEmail = false;
  actualSort=''
  previousSort = '';
  studentSpecParams: StudentSpecParams ={
     sort:'name',
     pageSize:10,
     pageNumber:1,
     name: '',
     email:'',
     zipcode: 0
  }


  constructor(private studentService: StudentService, private router: Router){}

  ngOnInit(): void {
    this.studentService.searchNameText.subscribe({
          next:(data) =>{
            this.studentSpecParams.name = data;
          }
    });
    if( this.studentSpecParams.name != '')
    {
      this.getStudents('name');
    }
   }

  showStudentDetail(id: number): void{
    this.studentService.searchNameText.next(this.studentSpecParams.name);
    this.router.navigate(['/studentdetail/detail', id])
  }

  clearSearch()
  {
    this.studentService.searchNameText.next('');
    this.studentsCount = -1;
  }

  setSort(sort: string): string
  {
    this.sortDirection = "asc";
    this.sortId = false;
    this.sortName = false;
    this.sortDateOfBirth = false;
    this.sortPhone = false;
    this.sortEmail = false;
    if(sort == "id")
    {
      this.sortId = true;
      if(this.previousSort == 'id')
      {
        this.sortDirection = 'desc';
        return 'id_desc';
      }
      return 'id'
    }
    
    if(sort == "name")
    {
      this.sortName = true;
      if(this.previousSort == 'name')
      {
         this.sortDirection = 'desc';
        return 'name_desc';
      }
      return 'name';
    }
    
    if(sort == "dateofbirth")
    {
      this.sortDateOfBirth = true;
      if(this.previousSort == 'dateofbirth')
      {
        this.sortDirection = 'desc';
        return 'dateofbirth_desc';
      }
      return 'dateofbirth';
    }
  
    if(sort == "phone")
    {
      this.sortPhone = true;
      if(this.previousSort == 'phone')
      {
        this.sortDirection = 'desc';
        return 'phone_desc';
      }
      return 'phone';
    }
   
    if(sort == "email")
    {
      this.sortEmail = true;
      if(this.previousSort == 'email')
      {
        this.sortDirection = 'desc';
        return 'email_desc';
      }
      return 'email';
    }
    return 'name';
  }

  
  getStudents(sort: string)
  {
    if(this.studentSpecParams.name.trim() != '')
    {
      this.loading = true;

       this.studentService.getStudentFilterCount(this.studentSpecParams.name,this.studentSpecParams.email,this.studentSpecParams.zipcode).subscribe((data: number) => {
          this.studentsCount = data;
        },
        error => {
          this.error = 'An error has occurred. Please try again later.';
          console.log(error.message);
          this.loading = false;
        }
      );

      this.actualSort = this.setSort(sort);
      this.studentSpecParams.sort = this.actualSort;
      this.studentService.getStudentByFilter(this.studentSpecParams.name,this.studentSpecParams.email,this.studentSpecParams.zipcode,this.studentSpecParams.sort,this.studentSpecParams.pageSize,this.studentSpecParams.pageNumber).subscribe((data: Student[]) => {
          this.students = data;
          this.list = new Array(Math.ceil(this.studentsCount/this.studentSpecParams.pageSize))
          console.log(this.list);
          this.loading = false;
        },
        error => {
          this.error = 'An error has occurred. Please try again later.';
          console.log(error.message);
          this.loading = false;
        }
      );
    }
    this.previousSort = this.actualSort;
  }

  addStudent()
  {
    this.router.navigate(['/createstudent'])
  }

  getPage(pageNumber: number)
  {
    this.studentSpecParams.pageNumber = pageNumber;
    this.studentSpecParams.sort = this.actualSort;
    this.studentService.getStudentByFilter(this.studentSpecParams.name,this.studentSpecParams.email,this.studentSpecParams.zipcode,this.studentSpecParams.sort,this.studentSpecParams.pageSize,this.studentSpecParams.pageNumber).subscribe((data: Student[]) => {
          this.students = data;
          this.list = new Array(Math.ceil(this.studentsCount/this.studentSpecParams.pageSize))
          console.log(this.list);
          this.loading = false;
        },
        error => {
          this.error = 'An error has occurred. Please try again later.';
          console.log(error.message);
          this.loading = false;
        }
    );
  }

  getPrevPage()
  {
    if(this.studentSpecParams.pageNumber -1 < 1)
    {
      return;
    }

    this.studentSpecParams.pageNumber -= 1;
    this.studentSpecParams.sort = this.actualSort;
    this.studentService.getStudentByFilter(this.studentSpecParams.name,this.studentSpecParams.email,this.studentSpecParams.zipcode,this.studentSpecParams.sort,this.studentSpecParams.pageSize,this.studentSpecParams.pageNumber).subscribe((data: Student[]) => {
          this.students = data;
          this.list = new Array(Math.ceil(this.studentsCount/this.studentSpecParams.pageSize))
          console.log(this.list);
          this.loading = false;
        },
        error => {
          this.error = 'An error has occurred. Please try again later.';
          console.log(error.message);
          this.loading = false;
        }
    );
  }

  getNextPage()
  {
    if(this.studentSpecParams.pageNumber +1 > this.list.length)
    {
      return;
    }
    
    this.studentSpecParams.pageNumber += 1;
    this.studentSpecParams.sort = this.actualSort;
    this.studentService.getStudentByFilter(this.studentSpecParams.name,this.studentSpecParams.email,this.studentSpecParams.zipcode,this.studentSpecParams.sort,this.studentSpecParams.pageSize,this.studentSpecParams.pageNumber).subscribe((data: Student[]) => {
          this.students = data;
          this.list = new Array(Math.ceil(this.studentsCount/this.studentSpecParams.pageSize))
          console.log(this.list);
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
