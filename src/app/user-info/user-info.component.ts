import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { UserClaims } from '@okta/okta-auth-js';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  userClaims: UserClaims;

  constructor(private oktaAuth: OktaAuthService) { }

  ngOnInit(): void {
    this.oktaAuth.getUser().then(res => {
      this.userClaims = res;
    });

  }

}
