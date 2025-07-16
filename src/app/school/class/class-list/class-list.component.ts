import { Component, OnInit } from '@angular/core';
import { mockClassList } from '../../mock-class-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-class-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './class-list.component.html',
  styleUrl: './class-list.component.css'
})
export class ClassListComponent implements OnInit {
  PageTitle: string = "Class List";
  classes: any[] = [];
  
  constructor() {}

  ngOnInit(): void {
    this.classes = mockClassList // This should be replaced with actual data fetching logic}
  }
}
