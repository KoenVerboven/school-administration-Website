import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-your-email-form',
  standalone: true,
  imports: [],
  templateUrl: './check-your-email-form.component.html',
  styleUrl: './check-your-email-form.component.css'
})
export class CheckYourEmailFormComponent {
 
  constructor( 
      private router: Router,
     ){}
  
  
  navigateToLogin()
  {
    this.router.navigateByUrl('/login')
  }

}
