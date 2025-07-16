import { Component, OnInit } from '@angular/core';
import { schools } from '../../mock-school-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-school-list',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './school-list.component.html',
  styleUrl: './school-list.component.css'
})
export class SchoolListComponent implements OnInit {
  PageTitle: string = "Class List";
    schools: any[] = [];
    
    constructor() {}
  
    ngOnInit(): void {
      this.schools = schools; // This should be replaced with actual data fetching logic}
    }
}
