import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {dashboarditems} from './mock-dashboard-list';
import { Router } from '@angular/router';
import { DashboardItemComponent } from "../dashboard-item/dashboard-item.component";
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard-list',
  standalone: true,
  imports: [CommonModule, DashboardItemComponent],
  templateUrl: './dashboard-list.component.html',
  styleUrl: './dashboard-list.component.css'
})
export class DashboardListComponent implements OnInit{
  items : any; 
  colomnNrs = [1,2,3 ];
  errorMessage = '';


  constructor(private dashboardService : DashboardService,
              private router: Router,
  ){}

  ngOnInit(): void {
    this.getStudentCount();
    this.getTeacherCount();
    this.getUserCount();
    this.getExamCount();
    this.getCourseCount();
  }

  getStudentCount()
  {
     this.dashboardService.getStudentCount().subscribe({
       next: result => this.setCountValues(result,'Students'),
      error: err => this.errorMessage = `Error : (${err.status})`
     });
  }

  getTeacherCount()
  {
     this.dashboardService.getTeacherCount().subscribe({
      next: result => this.setCountValues(result,'Teachers'),
      error: err => this.errorMessage = `Error : (${err.status})`
     });
  }

  getUserCount()
  {
     this.dashboardService.getUserCount().subscribe({
      next: result => this.setCountValues(result,'Users'),
      error: err => this.errorMessage = `Error : (${err.status})`
     });
  }

  getExamCount()
  {
     this.dashboardService.getExamCount().subscribe({
      next: result => this.setCountValues(result,'Exams'),
      error: err => this.errorMessage = `Error : (${err.status})`
     });
  }

   getCourseCount()
  {
     this.dashboardService.getExamCount().subscribe({
      next: result => this.setCountValues(result,'Courses'),
      error: err => this.errorMessage = `Error : (${err.status})`
     });
  }

  
  setCountValues(count : number, itemName : string)
  {
    dashboarditems.forEach(element => {
      if(element.itemName == itemName)
      {
        element.itemCount = count;
      }
    });
    this.items = dashboarditems;
  }
   
}
