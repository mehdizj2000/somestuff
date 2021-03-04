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

  public isMenuCollapsed = true;

  constructor(public oktaAuth: OktaAuthService) {
  }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    this.userName = (await this.oktaAuth.getUser()).name;
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
