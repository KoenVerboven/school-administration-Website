import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Router,ActivatedRoute } from '@angular/router';  

@Component({
  selector: 'app-school-form',  
  standalone: true,
  imports: [CommonModule],
  templateUrl: './school-form.component.html',
  styleUrl: './school-form.component.css'
})
export class SchoolFormComponent {

  pageTitle = "Create School";
  errorMessage: string = "";
  formAction: string = "true";
  schoolTypes =[
    {"Id":1,"Name":"Primary School"},  
    {"Id":2,"Name":"Secondary School"},     
    {"Id":3,"Name":"High School"},
    {"Id":4,"Name":"University"},
    {"Id":5,"Name":"Adult Education"}
  ];
  
  constructor(private router: Router, private route: ActivatedRoute) {}

  onSubmit() {
    throw new Error('Method not implemented.');
  }

  navigateBack() {
    this.router.navigateByUrl('/schools');
  }
  

}
