import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { studentpresenceitems } from './mock-studentpresence-list';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { StudentPresenceService } from '../services/student-presence.service';
import { Student } from '../models/student.model';
import { StudentPresence } from '../models/studentPresence.model';
import { SchoolClass } from '../models/schoolclass.models';
import { SchoolClassData } from '../models/schoolclassdata.models';


@Component({
  selector: 'app-student-presence',
  standalone: true,
  imports: [FormsModule,CommonModule, RouterModule],
  templateUrl: './student-presence.component.html',
  styleUrl: './student-presence.component.css'
})
export class StudentPresenceComponent implements OnInit {
  PageTitle: string = "student presence List";
  students: Student[] = [];
  studentsPresences: StudentPresence[] = [];
  classes: SchoolClass[] = [];
  departmentsCount = 0;
  loading = false;
  error = '';
  errorMessage : string = "";
  schoolClassData : SchoolClassData[] = [];
  selectedSchoolClassId: string = "";
  noPictureUrl: string = "/StudentPictures/NoPicture.jpg";
   
  absentReasonData =[
    {"Id":0,"Name":""},
    {"Id":1,"Name":"Unknown"},  
    {"Id":2,"Name":"Sick"},
    {"Id":3,"Name":"Public transport strike"},
    {"Id":4,"Name":"legally absent"}
   ];
   toLateData =[
    {"Id":0,"Name":"No"},
    {"Id":1,"Name":"< 5min"},  
    {"Id":2,"Name":"< 15min"},
    {"Id":3,"Name":"> 15min"},
   ];


  constructor(private studentPresenceService: StudentPresenceService,private router: Router) {}
 
   
  ngOnInit(): void {
    this.getStudents();
    this.getClasses();
  }

  getStudents():void{
    this.loading = true;
    this.studentPresenceService.getStudents().subscribe(studenstFromApi => {
        this.students = studenstFromApi;
        for(let student of this.students){
          this.studentsPresences.push({id:student.id, studentId: student.id, classId:0,studentName: student.lastName + ' ' + student.firstName, picture: student.picture,courseId:0,courseStartDateTime:new Date(),presence: false ,absenceReason:0,comment:'',createByTeacherId:0});
        }
        this.loading = false;
      },
      error => {
        this.error = 'An error has occurred while getting students. Please try again later.';
        console.log(error.message);
        this.loading = false;
      }
    ) 
  }

  getClasses():void{
    this.loading = true;
    this.studentPresenceService.getClassesBySchoolId(5).subscribe(classesFromApi => {
        this.classes = classesFromApi;
        for(let schoolclass of this.classes){
          this.schoolClassData.push({id:schoolclass.id, name: schoolclass.name});
        }
        this.loading = false;
      },
      error => {
        this.error = 'An error has occurred while getting classes. Please try again later.';
        console.log(error.message);
        this.loading = false;
      }
    ) 
  }

  onSubmit() {
     console.log('Saving student presences: ', this.studentsPresences);

    for(let sp of this.studentsPresences){
      console.log('Student presence: ', sp.studentName, sp.presence, sp.absenceReason, sp.comment);
      sp.courseId = undefined; //temp to set courseId
    }

    this.studentPresenceService.AddStudentsPresence(this.studentsPresences) 
      .subscribe({ 
        next: (response) =>{
          this.router.navigate(['/students'])
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = `Error occured during insert : ${err.status}`;
        }
      });

    alert('Student presences saved successfully!');
  }

  onClassChange(event : any) {
   
    console.log('Selected class ID: ', event.target.value);
    this.selectedSchoolClassId = event.target.value;
  }

}
