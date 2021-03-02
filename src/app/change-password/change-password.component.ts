import { PasswordValidator } from './password.validators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  form = new FormGroup({
    oldPass: new FormControl('', [Validators.required], PasswordValidator.isPasswordUsedBefore),
    newPass: new FormControl('', [Validators.required, Validators.minLength(5)]),
    confirmPass: new FormControl('', Validators.required),
  }, PasswordValidator.confirmPasswordMatched)

  constructor() { }

  ngOnInit(): void {
  }

  get oldPass() {
    return this.form.get('oldPass');
  }

  get newPass() {
    return this.form.get('newPass');
  }

  get confirmPass() {
    return this.form.get('confirmPass');
  }

}
