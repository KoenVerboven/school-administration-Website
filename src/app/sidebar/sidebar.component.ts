import { Component , EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();
  //todo : replace hardcoded menu by a dynamic one.
  dashboardVisible: boolean = false;
  studentsVisible: boolean = false;
  teachersVisible: boolean = false;
  coursesVisible:boolean = false;
  examsVisible:boolean= false;
  examResultsVisible: boolean = false;
  studyPlansVisible:boolean=false;
  mystudyplanVisible:boolean=false;
  usersVisible:boolean=false;

  userRole: string = 'admin';

  ngOnInit(): void {
    //authorization:
    if(this.userRole = 'admin')
    {
      this.dashboardVisible = true;
      this.studentsVisible= true;
      this.teachersVisible = true;
      this.coursesVisible = true;
      this.examsVisible= true;
      this.examResultsVisible = true;
      this.usersVisible=true;
    }
    if(this.userRole = 'student')
    {
      this.examResultsVisible = true;
      this.studyPlansVisible=true;
      this.mystudyplanVisible=true;
    }
    if(this.userRole = 'teacher')
    {
      this.coursesVisible = true;
      this.examsVisible= true;
      this.examResultsVisible = true;
    }
    if(this.userRole = 'parent')
    {
      this.examResultsVisible = true;
    }

  }
   

   





  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);
}
