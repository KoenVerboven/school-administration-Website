import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { LoginUser } from '../../models/loginUser.model';
import { AuthResponseData } from '../../models/authResponseData.model'
import { UserDTO } from '../../models/userDTO.model'
import { ApiResponse } from '../../models/apiResponse.model';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule,CommonModule, MatProgressSpinnerModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  user:LoginUser={
    userName:'maddy@test.be',
    password:'Admin123+',
  };

  userDTO:UserDTO={
    id:'',
    userName:'',
    name:'',
    email:'',
    role:''
  }

  responseData:AuthResponseData={
    id:'',
    userName: '',
    name: '',
    email: '',
    role:'',
    token:''
  }

  apiResponse : ApiResponse={
    httpStatusCode : '',
    isSuccess: false,
    errorMessages: [],
    result: this.responseData
  }

  signInMessage = "";
  loading = false;
  showPassword: boolean = false;
  loginCount: number = 0;
  maxLoginAttempts: number = 5;
  loginButtonDisabled: boolean = false;

  constructor(private authService: AuthService, private router: Router,){}

   togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  
  onSubmit(loginForm : NgForm):void{
    this.loginCount = this.loginCount + 1;
    if(this.loginCount >= this.maxLoginAttempts)
    {
      this.signInMessage = 'Too many failed login attempts. Adminstrator action needed to unlock.';
      this.loginButtonDisabled = true;
      //to do: lockout user ; admin action needed to unlock
      return;
    }
    this.authService.authenticated.next(false);
    if(!loginForm.valid)
    {
      return;
    }
    this.loading = true; 
    this.authService.userLogin(this.user) // correct login : username: maddy@test.be   password: Admin123+
      .subscribe({ 
        next: (data) =>{
          this.userDTO.name = data.result.name;
          this.userDTO.userName = data.result.userName;
          this.responseData = {
            id: data.result.id,
            userName:data.result.userName,
            name:data.result.name,
            email:data.result.email,
            role: data.result.role,
            token: data.result.token
          }
          this.authService.user.next(this.responseData);
          this.authService.authenticated.next(true);
          this.loading = false;
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error(err);
          this.loading = false;
          if(err.status === 400) {
            this.signInMessage = 'Invalid username or password.';
          }
   
        }
    });
    
    loginForm.reset();
  }

}
