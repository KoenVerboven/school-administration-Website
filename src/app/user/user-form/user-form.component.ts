import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user.model'; 
import { UserService } from '../services/user.service'; 
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators,} from '@angular/forms';
import { CustomValidators } from '../customValidators';
import { rolelistitems } from './mock-role-list';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, CommonModule,ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit {
  
  isUpdating: boolean = false;
  disableControls: boolean = false;
  formAction : string = "true";
  errorMessage : string = "";
  pageTitle: string = "Add User";
  userId: string| null = '';
  userForm: FormGroup;
  roleList : any;
  user : User= {
    id:'',
    name:'',
    userName:'',
    email: '',
    password:'',
    role:''
  }
 
  constructor(private userService : UserService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder){
    this.userForm = this.fb.group(
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
               Validators.email,
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
              Validators.required
            ],
          ],
      }
    );
  }

  ngOnInit():void{
     this.route.paramMap.subscribe(result => {
      const id = result.get('id');
      const action = result.get('action');
      this.userId = id;
      if(id){
        this.userService.getUserById(id).subscribe({
          next: result => this.user = result,
          error: err => this.errorMessage = `Error : (${err.status})`
        });
        this.isUpdating = true;
      }
      this.roleList= rolelistitems;
      
      if(action == null){this.pageTitle = "Create user"}
      else if(action == "detail"){
        this.pageTitle = "User detail";
        this.formAction = "detail";
        this.disableControls = true;
      }
      else if(action == "update"){
        this.pageTitle = "Update user";
      }
 
    });
  }

  navigateBack()
  {
    this.router.navigateByUrl('/users');
  }

  onSubmit():void{
    //test of username of email uniek is (exists)
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
      this.userForm.get(controlName)?.hasError(errorName) &&
      this.userForm.get(controlName)?.touched
    );
  }
 
}
