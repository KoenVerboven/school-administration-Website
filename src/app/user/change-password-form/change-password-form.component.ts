import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/user';

@Component({
  selector: 'app-change-password-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './change-password-form.component.html',
  styleUrl: './change-password-form.component.css'
})
export class ChangePasswordFormComponent {

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
