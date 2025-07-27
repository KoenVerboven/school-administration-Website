import { Component, OnInit } from '@angular/core';
import { schoolDepartments } from '../../mock-department-list';
import { CommonModule } from '@angular/common';
import { Router , RouterModule} from '@angular/router';

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
  
  constructor(private router: Router) {}
  
  ngOnInit(): void {
    this.departments = schoolDepartments; // This should be replaced with actual data fetching logic}
  }

  addDepartment() {
    this.router.navigate(['/createdepartment']);
  }
  
  showDepartmentDetail(id: number): void {
    this.router.navigate(['/departmentdetail/detail', id])
  }
}
