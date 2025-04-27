import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user.model'; 
import { UserService } from '../services/user.service'; 
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators,} from '@angular/forms';
import { CustomValidators } from '../customValidators';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, CommonModule,ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  user : User= {
    name:'',
    userName:'',
    email: '',
    password:'',
    role:''
  }
   
  isUpdating: boolean = false;
  disableControls: boolean = false;
  formAction : string = "true";
  errorMessage : string = "";
  pageTitle: string = "Add User";
  userId: string| null = '';
  passwordForm: FormGroup;

  constructor(private userService : UserService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder){
    this.passwordForm = this.fb.group(
      {
        name:[
          '',
          [
                Validators.required,
          ],
        ],
        userName:[
          '',
          [
                Validators.required,
          ],
        ],
        email:[
          '',
          [
               
          ],
        ],
        password: [
              '',
              [
                  Validators.required,
                  Validators.minLength(8),
                  CustomValidators.hasUppercase,
                  CustomValidators.hasNumber,
                  CustomValidators.hasSpecialCharacter,
              ],
          ],
          role:[
            '',
            [
                  Validators.required,
            ],
          ],
      }
     
  );
  }

  navigateBack()
  {
    this.router.navigateByUrl('/users')
  }

  onSubmit():void{
    //test of username uniek is
    if(!this.isUpdating){
      //inserting
      this.userService.createUser(this.user)
      .subscribe({ 
        next: (response) =>{
          this.router.navigate(['/users'])
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = `Error occured during insert : ${err.status}`;
        }
      });
    }
  }

    // check if a specific control has a specific error and if it was touched
    hasError(controlName: string, errorName: string) {
      return (
          this.passwordForm.get(controlName)?.hasError(errorName) &&
          this.passwordForm.get(controlName)?.touched
      );
  }
 
}
