import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';  // Import Reactive form modules

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  // Create the form group and form controls with validation
  userForm: FormGroup;

  submittedUser: any = null;  // Variable to store the user data after submission

  constructor() {
    // Initialize the form group with form controls and validators
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  // onSubmit method to handle form submission
  onSubmit() {
    if (this.userForm.valid) {
      this.submittedUser = { ...this.userForm.value };  // Store the submitted user data
      console.log('Form Submitted!', this.userForm.value);
    } else {
      console.log('Form is not valid');
    }
  }

  // Getter methods to easily access form controls in the template
  get name() {
    return this.userForm.get('name')!;
  }

  get email() {
    return this.userForm.get('email')!;
  }

  get password() {
    return this.userForm.get('password')!;
  }
}
