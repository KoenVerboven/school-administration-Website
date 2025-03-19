import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
    AbstractControl,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';





@Component({
  selector: 'app-change-password-form',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
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
                      Validators.minLength(6),
                      this.hasUppercase,
                      this.hasNumber,
                      this.hasSpecialCharacter,
                  ],
              ],
              confirmPassword: ['', Validators.required],
          },
          { validator: this.passwordMatchValidator }
      );
  }

  // Custom validator to check if passwords match
  passwordMatchValidator(form: FormGroup) {
      const password = form.get('password')?.value;
      const confirmPassword = form.get('confirmPassword')?.value;
      if (password !== confirmPassword) {
          return { passwordMismatch: true };
      }
      return null;
  }

  // Custom validator to check if the password contains at least one uppercase letter
  hasUppercase(control: AbstractControl) {
      const value = control.value;
      if (value && !/[A-Z]/.test(value)) {
          return { uppercase: true };
      }
      return null;
  }

  // Custom validator to check if the password contains at least one number
  hasNumber(control: AbstractControl) {
      const value = control.value;
      if (value && !/\d/.test(value)) {
          return { number: true };
      }
      return null;
  }

  // Custom validator to check if the password contains at least one special character
  hasSpecialCharacter(control: AbstractControl) {
      const value = control.value;
      if (value && !/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
          return { specialCharacter: true };
      }
      return null;
  }

  // Form Submit
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
