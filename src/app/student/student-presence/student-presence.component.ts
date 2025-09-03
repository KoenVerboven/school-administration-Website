import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { studentpresenceitems } from './mock-studentpresence-list';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { StudentPresenceService } from '../services/student-presence.service';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student-presence',
  standalone: true,
  imports: [FormsModule,CommonModule, RouterModule],
  templateUrl: './student-presence.component.html',
  styleUrl: './student-presence.component.css'
})
export class StudentPresenceComponent implements OnInit {

  items = studentpresenceitems;

  PageTitle: string = "student presence List";
  students: Student[] = [];
  departmentsCount = 0;
  loading = false;
  error = '';

  constructor(private studentPresenceService: StudentPresenceService,private router: Router) {}
 
   
  ngOnInit(): void {
    this.getStudents();
  }

  getStudents():void{
    this.loading = true;
    this.studentPresenceService.getStudents().subscribe(studenstFromApi => {
        this.students = studenstFromApi;
        this.loading = false;
      },
      error => {
        this.error = 'An error has occurred. Please try again later.';
        console.log(error.message);
        this.loading = false;
      }
    ) 
  }

  onSubmit() {
    alert('Form submitted!');
  }


}
