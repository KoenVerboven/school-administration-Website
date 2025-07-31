import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-class-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './class-form.component.html',
  styleUrl: './class-form.component.css'
})
export class ClassFormComponent {
  pageTitle= 'Class Form';
  errorMessage: string = '';
  formAction: any;

  constructor(private router: Router, private route: ActivatedRoute) {}

  navigateBack() {
   this.router.navigateByUrl('/classes');
  }

  onSubmit() {
    throw new Error('Method not implemented.');
  }
  

}
