import { Component } from '@angular/core';
import { studentpresenceitems } from './mock-studentpresence-list';

@Component({
  selector: 'app-student-presence',
  standalone: true,
  imports: [],
  templateUrl: './student-presence.component.html',
  styleUrl: './student-presence.component.css'
})
export class StudentPresenceComponent {
  items = studentpresenceitems;
}
