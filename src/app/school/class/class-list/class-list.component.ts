import { Component, OnInit } from '@angular/core';
import { mockClassList } from '../../mock-class-list';
import { CommonModule } from '@angular/common';
import { Router , RouterModule} from '@angular/router';

@Component({
  selector: 'app-class-list',
  standalone: true,
  imports: [CommonModule,  RouterModule],
  templateUrl: './class-list.component.html',
  styleUrl: './class-list.component.css'
})
export class ClassListComponent implements OnInit {
  PageTitle: string = "Class List";
  classes: any[] = [];
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.classes = mockClassList // This should be replaced with actual data fetching logic}
  }

  addClass() {
    this.router.navigate(['/createsclass']);
  }
 
  showClassDetail(id: number): void {
    this.router.navigate(['/classdetail/detail', id]) 
  }

}
