import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent   {
  
  numberList : number[]=[1,2,3,4,5];
  today: Date = new Date();
  
  constructor(private elementRef: ElementRef) {}
}
