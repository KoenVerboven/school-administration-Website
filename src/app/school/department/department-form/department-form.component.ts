import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SchoolDepartment } from '../../models/schooldepartment.model';
import { DepartmentService } from '../services/department.service';
import { Router,ActivatedRoute } from '@angular/router';  

@Component({
  selector: 'app-department-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './department-form.component.html',
  styleUrl: './department-form.component.css'
})
export class DepartmentFormComponent implements OnInit {

  pageTitle = "Create Department";
  errorMessage: string = '';
  formAction: any;
  disableControls: boolean = false;
  isUpdating: boolean = false;
  departmentId: number = 0;
  department: SchoolDepartment = {
    id: 0,
    name: '', 
    schoolId: 0,
    headOfTheDepartmentId: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true, 
    description: '',
    facultyIds: [],
    budget: 0,  
    yearEstablished: new Date().getFullYear(),
    type: '', 
    website: '',    
    logoUrl: '',
    contactEmail: '', 
    contactPhone: '',   
    locationWithinTheSchool: '',
    section: '', 
    establishedDate: new Date()
  };

  constructor(private departmentService: DepartmentService,  private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.route.paramMap.subscribe(result => {
      const id = result.get('id');
      const action = result.get('action');
      this.departmentId = Number(id);
      if(id){
        this.departmentService.getDepartmentById(Number(id)).subscribe({
        next: result => this.department = result,
        error: err => this.errorMessage = `Error : (${err.status})`
       });
       this.isUpdating = true;
      } 
      
      if(action == null){this.pageTitle = "Create department"}
        else if(action == "detail"){
          this.pageTitle = "department detail";
          this.formAction = "detail";
          this.disableControls = true;
        }
        else if(action == "update"){this.pageTitle = "Update department"}
   
    });
  }

  navigateBack() {
    this.router.navigateByUrl('/departments');
  }

  onSubmit() {
    throw new Error('Method not implemented.');
  }

}
