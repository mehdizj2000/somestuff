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

  public toggleButton() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this.ngOnInit();
  }

  private getUserInfo() {
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => {
        this.isAuthenticated = isAuthenticated;
        if (isAuthenticated)
          this.oktaAuth.getUser().then(res => {
            console.log(res);
            this.userName = res.name;
          });
      }
    );
  }

  constructor(public oktaAuth: OktaAuthService, public router: Router) {

  }

  ngOnInit() {
    this.getUserInfo();
  }

  async logout() {
    await this.oktaAuth.signOut();
    // this.router.navigateByUrl('/login');
  }

}
