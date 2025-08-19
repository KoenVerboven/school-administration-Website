import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SchoolClass } from '../../models/schoolclass.model';
import { ClassService } from '../services/class.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-class-form',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './class-form.component.html',
  styleUrl: './class-form.component.css'
})
export class ClassFormComponent implements OnInit {
  pageTitle= 'Class Form';
  errorMessage: string = '';
  formAction: any;
  disableControls: boolean = false;
  isUpdating: boolean = false;
  classId: number = 0;
  schoolClass: SchoolClass = {
    id: 0,
    name: '',
    grade:0,   
    schoolId: 0,
    departmentId: 0,
    teacherId: 0,
    deparmentId: 0,
    isActive: true,
    academicYear: new Date().getFullYear(),
    descripton: '',
    roomNuber: '' 
  }

  constructor(private classService: ClassService,private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.route.paramMap.subscribe(result => {
      const id = result.get('id');
      const action = result.get('action');
      this.classId = Number(id);
      if(id){
        this.classService.getClassById(Number(id)).subscribe({
        next: result => this.schoolClass = result,
        error: err => this.errorMessage = `Error : (${err.status})`
       });
       this.isUpdating = true;
      } 
      
      if(action == null){this.pageTitle = "Create class"}
        else if(action == "detail"){
          this.pageTitle = "class detail";
          this.formAction = "detail";
          this.disableControls = true;
        }
        else if(action == "update"){this.pageTitle = "Update class"}
   
    });
  }

  navigateBack() {
   this.router.navigateByUrl('/classes');
  }

  onSubmit() {
    throw new Error('Method not implemented.');
  }
  

}
