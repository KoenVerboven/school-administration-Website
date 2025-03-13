import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {dashboarditems} from '../mock-dashboard-list';

@Component({
  selector: 'app-dashboard-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-list.component.html',
  styleUrl: './dashboard-list.component.css'
})
export class DashboardListComponent {
    items =  dashboarditems ;   
   
}
