import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-user.html',
  styleUrls: ['./new-user.css'],
})
export class NewUser {
  form: FormGroup;
  availableCategories = ['work', 'personal', 'urgent'];
  constructor() {
    this.form = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.maxLength(18),
      ]),

      lastName: new FormControl('', [
        Validators.required,
        Validators.maxLength(18),
      ]),

      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),

      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),

      confirmPassword: new FormControl('', [
        Validators.required,
      ]),
      categories: new FormControl(
      this.availableCategories.map(() => new FormControl(false))
)
    });
  }

get categories(): FormControl | null { return this.form.get('categories') as FormControl | null; }
  get firstName(): FormControl {
    return this.form.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.form.get('lastName') as FormControl;
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  get confirmPassword(): FormControl {
    return this.form.get('confirmPassword') as FormControl;
  }


  get firstNameRequired(): boolean {
    return this.firstName.touched && this.firstName.hasError('required');
  }
  get firstNameTooLong(): boolean {
    return this.firstName.touched && this.firstName.hasError('maxlength');
  }

  
  get lastNameRequired(): boolean {
    return this.lastName.touched && this.lastName.hasError('required');
  }
  get lastNameTooLong(): boolean {
    return this.lastName.touched && this.lastName.hasError('maxlength');
  }

  get emailRequired(): boolean {
    return this.email.touched && this.email.hasError('required');
  }
  get emailInvalid(): boolean {
    return this.email.touched && this.email.hasError('email');
  }

  get passwordRequired(): boolean {
    return this.password.touched && this.password.hasError('required');
  }
  get passwordTooShort(): boolean {
    return this.password.touched && this.password.hasError('minlength');
  }

  get confirmPasswordRequired(): boolean {
    return (
      this.confirmPassword.touched &&
      this.confirmPassword.hasError('required')
    );
  }

 onSubmit() {
  if (this.form.valid) {
    console.log('Form Value:', this.form.value);
  } else {
    this.form.markAllAsTouched();
  }
}

}
