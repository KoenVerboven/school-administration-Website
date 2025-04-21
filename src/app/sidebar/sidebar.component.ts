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
  studentsVisible: boolean = false;
  teachersVisible: boolean = false;
  coursesVisible:boolean = false;
  examsVisible:boolean= false;
  examResultsVisible: boolean = false;
  studyPlansVisible:boolean=false;
  mystudyplan:boolean=false;

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);
}
