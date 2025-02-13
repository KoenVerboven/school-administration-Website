import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student'; 
import { StudentService } from '../Services/student.service';
import { CommonModule } from '@angular/common';
import { Router , RouterModule} from '@angular/router';

@Component({
  selector: 'student-table',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './student-table.component.html',
  styleUrl: './student-table.component.css'
})
export class StudentTableComponent {
 
  students: Student[] = [];

  constructor(private studentService: StudentService, private router: Router){}

  ngOnInit(){
    this.studentService.getStudents().subscribe((data: Student[]) =>{
        this.students = data;
        console.log(data);
    });
  }

  deleteStudent(id : number) : void {
    this.studentService.deleteStudent(id).subscribe({
      next: (response) => {
        this.students = this.students.filter(s => s.id != id);
      },
      error: (err) => {
        console.error('Error deleting student',err);
      }
    });
  }

  updateStudent(id: number): void{
    this.router.navigate(['/studentdetail/update', id])
  }

  showStudentDetail(id: number): void{
    this.router.navigate(['/studentdetail/detail', id])
  }


}
