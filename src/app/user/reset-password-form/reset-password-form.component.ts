import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../models/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reset-password-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './reset-password-form.component.html',
  styleUrl: './reset-password-form.component.css'
})
export class ResetPasswordFormComponent {
  
  user:User={
    id:'',
    name: '',
    userName:'',
    email:'',
    password:'',
    role:''
  }

  constructor( 
      private router: Router,
     ){}
 
  onSubmit():void{
    this.router.navigateByUrl('/checkyouremail')
  }
  
}
