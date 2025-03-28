import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../Services/auth.service';
import { LoginUser } from '../../../models/loginUser.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  user:LoginUser={
    userName:'',
    password:'',
  }

  errorMessage : string = "";

  constructor(private authService: AuthService, private router: Router,){}
  
  onSubmit():void{
      this.authService.userLogin(this.user)
      .subscribe({ 
        next: (response) =>{
          this.router.navigate(['/'])
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = `Error occured during login : ${err.status}`;
        }
      });
    
    this.user.userName = '';
    this.user.password = '';
  }

}
