import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  
  numberList : number[]=[1,2,3,4,5];
  
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      '#000';
  }

   ngOnDestroy() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      '#FFFF';
  }

}
