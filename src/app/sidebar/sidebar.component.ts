import { Component , EventEmitter, OnChanges, SimpleChanges,Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnChanges {
  @Input() isExpanded: boolean = false;
  @Input() userRole:string = '';

  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();
  //todo : replace hardcoded menu by a dynamic one.
  dashboardVisible: boolean = false;
  studentsVisible: boolean = false;
  teachersVisible: boolean = false;
  coursesVisible: boolean = false;
  examsVisible: boolean= false;
  examResultsVisible: boolean = false;
  studyPlansVisible: boolean=false;
  mystudyplanVisible: boolean=false;
  usersVisible: boolean=false;
  studentPresenceVisible: boolean= false;
  settingsVisible: boolean = false;

  ngOnInit(): void {
    this.setRights();
  }

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);
 
  setRights()
  {
    if(this.userRole == '')
      {
        this.dashboardVisible = false;
        this.studentsVisible= false;
        this.teachersVisible = false;
        this.coursesVisible = false;
        this.examsVisible= false;
        this.examResultsVisible = false;
        this.usersVisible=false;
      }
      if(this.userRole == 'admin')
      {
        this.dashboardVisible = true;
        this.studentsVisible= true;
        this.teachersVisible = true;
        this.coursesVisible = true;
        this.examsVisible= true;
        this.examResultsVisible = true;
        this.usersVisible = true;
        this.settingsVisible = true;
        this.studentPresenceVisible = true;
      }
      if(this.userRole == 'student')
      {
        this.examResultsVisible = true;
        this.studyPlansVisible=true;
        this.mystudyplanVisible=true;
      }
      if(this.userRole =='teacher')
      {
        this.coursesVisible = true;
        this.examsVisible= true;
        this.examResultsVisible = true;
        this.studentPresenceVisible = true;
      }
      if(this.userRole == 'parent')
      {
        this.examResultsVisible = true;
      }
  }

  //more info How to detect an @Input() value changes in Angular : https://medium.com/@aryanvania03/how-to-detect-when-an-input-value-changes-in-angular-8dbf36222bb1

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['userRole'].currentValue);
    this.userRole = changes['userRole'].currentValue;
    this.setRights();
  }

 
}
