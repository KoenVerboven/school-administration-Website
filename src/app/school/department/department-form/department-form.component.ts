import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router,ActivatedRoute } from '@angular/router';  

@Component({
  selector: 'app-department-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './department-form.component.html',
  styleUrl: './department-form.component.css'
})
export class DepartmentFormComponent {

  pageTitle = "Create Department";
  errorMessage: string = '';
  formAction: any;

  constructor(private router: Router, private route: ActivatedRoute) {}

  navigateBack() {
    this.router.navigateByUrl('/departments');
  }

  onSubmit() {
    throw new Error('Method not implemented.');
  }

}
