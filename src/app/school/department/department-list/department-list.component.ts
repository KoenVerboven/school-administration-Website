import { Component, OnInit } from '@angular/core';
import { schoolDepartments } from '../../mock-department-list';
import { CommonModule } from '@angular/common';
import { Router , RouterModule} from '@angular/router';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css'
})
export class DepartmentListComponent implements OnInit {
  PageTitle: string = "Department List";
  departments: any[] = [];
  departmentsCount = 0;
  loading = false;
  error = '';
  
  constructor(private departmentService: DepartmentService,private router: Router) {}
  
  ngOnInit(): void {
    this.getDepartments();
  }

  getDepartments():void{
    this.loading = true;
    this.departmentService.getDepartments().subscribe(departmentsFromApi => {
        this.departments = departmentsFromApi;
        this.departmentsCount = this.departments.length;
        this.loading = false;
      },
      error => {
        this.error = 'An error has occurred. Please try again later.';
        console.log(error.message);
        this.loading = false;
      }
    ) 
  }

  addDepartment() {
    this.router.navigate(['/createdepartment']);
  }
  
  showDepartmentDetail(id: number): void {
    this.router.navigate(['/departmentdetail/detail', id])
  }
}
