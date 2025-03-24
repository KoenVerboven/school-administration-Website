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
   @Input() itemName!:string;
   @Input() itemCount!: number;
   @Input() itemColor!: string;
   @Input() itemUrl!: string
  
   constructor(private router: Router,
   ){}

   showMoreInfo(url : string)
    {
      this.router.navigateByUrl(url)
    }

}
