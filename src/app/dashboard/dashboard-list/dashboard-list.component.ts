import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {dashboarditems} from './mock-dashboard-list';
import { Router } from '@angular/router';
import { DashboardItemComponent } from "../dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-dashboard-list',
  standalone: true,
  imports: [CommonModule, DashboardItemComponent],
  templateUrl: './dashboard-list.component.html',
  styleUrl: './dashboard-list.component.css'
})
export class DashboardListComponent {
    items =  dashboarditems ;   
    nrs  = [1,2,3 ];

     constructor(private router: Router,
     ){}

    showMoreInfo(url : string)
    {
      this.router.navigateByUrl(url)
    }
   
}
