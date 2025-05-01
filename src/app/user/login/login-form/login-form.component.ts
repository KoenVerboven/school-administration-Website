import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { LoginUser } from '../../models/loginUser.model';
import { AuthResponseData } from '../../models/authResponseData.model'
import { UserDTO } from '../../models/userDTO.model'
import { ApiResponse } from '../../models/apiResponse.model';
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
    userName:'maddy@test.be',
    password:'Admin123+',
  };

  userDTO:UserDTO={
    id:'',
    userName:'',
    name:''
  }

  responseData:AuthResponseData={
    user: this.userDTO,
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
  isLoading = false;

  constructor(private authService: AuthService, private router: Router,){}
  
  onSubmit(loginForm : NgForm):void{
    if(!loginForm.valid)
    {
      return;
    }
    this.isLoading = true; // de spinner nog toevoegen !!!
    ///api/UserAuth/login
    this.authService.userLogin(this.user) // correct login : username: maddy@test.be   password: Admin123+
      .subscribe({ 
        next: (data) =>{
          //console.log(data.result.role);
          this.userDTO.name = data.result.user.name;
          this.userDTO.userName = data.result.user.userName;
          this.responseData = {
            user: this.userDTO,
            role:data.result.role,
            token:data.result.token
          }
          this.authService.user.next(this.responseData);
          //alert(data.result.user.userName);
          //alert(data.result.role);
          //alert(data.result.token);
          this.isLoading = false;
          this.router.navigate(['/'])
        },
        error: (err) => {
          //console.error(err);
          this.isLoading = false;
          this.signInMessage = 'Bad userName or Password.';
        }
      });
   
    loginForm.reset();

  }

}
