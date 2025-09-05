import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { studentpresenceitems } from './mock-studentpresence-list';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { StudentPresenceService } from '../services/student-presence.service';
import { Student } from '../models/student.model';
import { StudentPresence } from '../models/studentPresence.model';

@Component({
  selector: 'app-student-presence',
  standalone: true,
  imports: [FormsModule,CommonModule, RouterModule],
  templateUrl: './student-presence.component.html',
  styleUrl: './student-presence.component.css'
})
export class StudentPresenceComponent implements OnInit {

  //studentsPresences = studentpresenceitems;

  PageTitle: string = "student presence List";
  students: Student[] = [];
  studentsPresences: StudentPresence[] = [];
  departmentsCount = 0;
  loading = false;
  error = '';
  
  absentReasonData =[
    {"Id":0,"Name":"Please choose an option"},
    {"Id":1,"Name":"Unknown"},  
    {"Id":2,"Name":"Sick"},
    {"Id":3,"Name":"Public transport strike"},
    {"Id":4,"Name":"legally absent"}
   ];


  constructor(private studentPresenceService: StudentPresenceService,private router: Router) {}
 
   
  ngOnInit(): void {
    this.getStudents();
  }

  getStudents():void{
    this.loading = true;
    this.studentPresenceService.getStudents().subscribe(studenstFromApi => {
        this.students = studenstFromApi;
        for(let student of this.students){
          this.studentsPresences.push({id:student.id, studentId: student.id, classId:0,studentName: student.lastName + ' ' + student.firstName, courseId:0,courseStartDateTime:new Date(),presence: false ,absenceReason:0,comment:'',createByTeacherId:0});
        }
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
     console.log('Saving student presences: ', this.studentsPresences);

    for(let sp of this.studentsPresences){
      console.log('Student presence: ', sp.studentName, sp.presence, sp.absenceReason, sp.comment);
      //todo: call api to save each student presence
    }

    /* 
    this.studentPresenceService.saveStudentsPresences(this.studentsPresences).subscribe(response => {
        alert('Student presences saved successfully!');
        this.router.navigate(['/teacher']);
      }
    */
  }

}
