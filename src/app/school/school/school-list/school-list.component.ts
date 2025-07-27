import { Component, OnInit } from '@angular/core';
import { schools } from '../../mock-school-list';
import { CommonModule } from '@angular/common';
import { Router , RouterModule} from '@angular/router';

@Component({
  selector: 'app-school-list',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './school-list.component.html',
  styleUrl: './school-list.component.css'
})
export class SchoolListComponent implements OnInit {
  PageTitle: string = "School List";
  schools: any[] = [];
    
  constructor(private router: Router) {}
  
  ngOnInit(): void {
    this.schools = schools; // This should be replaced with actual data fetching logic}
  }

  addSchool() {
    this.router.navigate(['/createschool']);
  }

  showSchoolDetail(id: number): void {
    this.router.navigate(['/schooldetail/detail', id]) 
  }
}
