import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { StudentTableComponent } from './student-table/student-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StudentTableComponent, RouterModule], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'school-administration-app';
}
