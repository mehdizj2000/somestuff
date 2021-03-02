import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({
    account: new FormGroup(
      {
        username: new FormControl('', [Validators.required, Validators.minLength(5), UsernameValidators.connotContainSpace], [UsernameValidators.shouldBeUnique]),
        password: new FormControl('', Validators.required)
      }
    )

  });

  get username() {
    return this.form.get('account.username');
  }

  get password() {
    return this.form.get('account.password');
  }
}
