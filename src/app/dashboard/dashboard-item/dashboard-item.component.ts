import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {

   @Input({required:true})dashboardItem!:{
      id:number;
      itemName:string;
      columnNumber: number;
      itemCount?: number | undefined;
      color?: string | undefined;
      url: string;
      icon:string;
      visible:boolean
   }
  
   constructor(private router: Router,
   ){}

   showMoreInfo(url : string)
   {
     this.router.navigateByUrl(url)
   }

}
