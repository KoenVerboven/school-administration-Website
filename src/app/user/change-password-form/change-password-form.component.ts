import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomValidators} from '../customValidators'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators,} from '@angular/forms';

@Component({
  selector: 'app-change-password-form',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule],
  templateUrl: './change-password-form.component.html',
  styleUrl: './change-password-form.component.css'
})
export class ChangePasswordFormComponent {

  
  title = 'password-validator-app';
  passwordForm: FormGroup;

  constructor(private fb: FormBuilder) {
      this.passwordForm = this.fb.group(
          {
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
              confirmPassword: ['', Validators.required],
          },
          { validator: CustomValidators.passwordMatchValidator }
      );
  }
      
  onSubmit() {
      if (this.passwordForm.valid) {
          alert(`Form Submitted Successfully`);
      } else {
          alert('Please check the form for errors');
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
