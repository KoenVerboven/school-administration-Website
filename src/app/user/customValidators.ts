import {AbstractControl, FormGroup} from '@angular/forms';

export class CustomValidators{
  
    static passwordMatchValidator(form: FormGroup) {
        const password = form.get('password')?.value;
        const confirmPassword = form.get('confirmPassword')?.value;
        if (password !== confirmPassword) {
            return { passwordMismatch: true };
        }
        return null;
    }

    static hasUppercase(control: AbstractControl) {
          const value = control.value;
          if (value && !/[A-Z]/.test(value)) {
              return { uppercase: true };
          }
          return null;
    }

    static hasNumber(control: AbstractControl) {
        const value = control.value;
        if (value && !/\d/.test(value)) {
            return { number: true };
        }
        return null;
    }

    static hasSpecialCharacter(control: AbstractControl) {
        const value = control.value;
        if (value && !/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
            return { specialCharacter: true };
        }
        return null;
    }

}



   


