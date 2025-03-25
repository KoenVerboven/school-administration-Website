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

  // input : instelbaar van buitenaf.
   @Input({required:true}) itemName!:string;
   @Input() itemCount: number | undefined;
   @Input() itemColor!: string | undefined;
   @Input({required:true}) itemUrl!: string
  
   constructor(private router: Router,
   ){}

   showMoreInfo(url : string)
   {
     this.router.navigateByUrl(url)
   }

}
