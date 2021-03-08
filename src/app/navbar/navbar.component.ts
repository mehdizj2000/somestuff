import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  public toggleButton(){
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this.ngOnInit();
  }

  constructor(public oktaAuth: OktaAuthService, public router: Router) {
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
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

  async logout() {
    await this.oktaAuth.signOut();
    this.router.navigateByUrl('/');
  }

}
