import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { NgModule } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'school-administration-app';
}
