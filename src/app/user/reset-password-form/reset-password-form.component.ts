import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../../models/user';


@Component({
  selector: 'app-reset-password-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './reset-password-form.component.html',
  styleUrl: './reset-password-form.component.css'
})
export class ResetPasswordFormComponent {
  
  user:User={
    userName:'',
    email:'',
    password:'',
    newPassword:''
  }
 
  onSubmit():void{
    alert("submit");
  }
  
}
