import { Component, OnInit } from '@angular/core';
import { schoolDepartments } from '../../mock-department-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css'
})
export class DepartmentListComponent implements OnInit {
  PageTitle: string = "Department List";
  departments: any[] = [];
  
  constructor() {}
  
  ngOnInit(): void {
    this.departments = schoolDepartments; // This should be replaced with actual data fetching logic}
  }

}
