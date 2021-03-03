import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { from } from 'rxjs';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAuthenticated: boolean;
  userName: string;

  constructor(public oktaAuth: OktaAuthService) {
  }

  ngOnInit() {
    this.oktaAuth.$authenticationState.subscribe(res => {
      this.isAuthenticated = res;
      console.log(this.oktaAuth.getAccessToken());
      this.oktaAuth.getUser().then(res => this.userName = res.name);
    });
  }

  login() {
    this.oktaAuth.signInWithRedirect({
      originalUri: '/followers'
    });
  }

  logout() {
    this.oktaAuth.signOut();
  }

}
