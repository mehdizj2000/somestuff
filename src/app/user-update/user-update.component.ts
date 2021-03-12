import { UserClaims } from '@okta/okta-auth-js';
import { OktaAuthService } from '@okta/okta-angular';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  form: FormGroup = new FormGroup(
    {
      username: new FormControl({ value: '', disabled: true }),
      firstname: new FormControl({value: '', autocomplete: 'off'}, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)])
    }
  )

  constructor(private router: ActivatedRoute, private oktaAuth: OktaAuthService) {
    router.paramMap.subscribe(params => {
      console.log(params);

    });
  }

  get username(): AbstractControl {
    return this.form.controls['username'];
  }

  get firstname(): AbstractControl {
    return this.form.controls['firstname'];
  }

  get lastname(): AbstractControl {
    return this.form.controls['lastname'];
  }

  async ngOnInit() {

    let userClaims: UserClaims = await this.oktaAuth.getUser();

    this.form.controls['username'].setValue(userClaims.email);
    this.form.controls['firstname'].setValue(userClaims.given_name);
    this.form.controls['lastname'].setValue(userClaims.family_name);

  }

}
