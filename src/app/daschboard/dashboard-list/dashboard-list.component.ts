import { Component, OnInit } from '@angular/core';
import {DashboardItem} from '../../../models/dashboardItem'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-list.component.html',
  styleUrl: './dashboard-list.component.css'
})
export class DashboardListComponent {
    items: DashboardItem[] = [
      {
        id:1,
        itemName:'Students',
        columnNumber: 1,
        itemCount:0,
        color:'red'
      },
      {
        id:2,
        itemName:'Teachers',
        columnNumber: 1,
        itemCount:0,
        color:'red'
      },
      {
        id:3,
        itemName:'Courses',
        columnNumber: 3,
        itemCount:0,
        color:'green'
      },
      {
        id:4,
        itemName:'Exams',
        columnNumber: 2,
        itemCount:0,
        color:'blue'
      },
      {
        id:5,
        itemName:'ExamResults',
        columnNumber: 2,
        itemCount:0,
        color:'blue'
      },
      
    ];
   
}
