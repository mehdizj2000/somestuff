import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import * as OktaSignIn from '@okta/okta-signin-widget';
import sampleConfig from '../app.config';


const DEFAULT_ORIGINAL_URI = window.location.origin;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  signIn: OktaSignIn;
  constructor(public oktaAuth: OktaAuthService) {
    this.signIn = new OktaSignIn({
      /**
       * Note: when using the Sign-In Widget for an OIDC flow, it still
       * needs to be configured with the base URL for your Okta Org. Here
       * we derive it from the given issuer for convenience.
       */
      baseUrl: sampleConfig.oidc.issuer.split('/oauth2')[0],
      clientId: sampleConfig.oidc.clientId,
      redirectUri: sampleConfig.oidc.redirectUri,
      logo: '/assets/angular.svg',
      i18n: {
        en: {
          'primaryauth.title': 'Sign in to Angular & Company',
        },
      },
      authParams: {
        issuer: sampleConfig.oidc.issuer
      }
    });
  }

  ngOnInit() {
    this.signIn.remove();
    this.signIn.showSignInToGetTokens({
      el: '#okta-signin-container',
      scopes: sampleConfig.oidc.scopes
    }).then(tokens => {
      // When navigating to a protected route, the route path will be saved as the `originalUri`
      // If no `originalUri` has been saved, then redirect back to the app root
      const originalUri = this.oktaAuth.getOriginalUri();
      if (originalUri === DEFAULT_ORIGINAL_URI) {
        this.oktaAuth.setOriginalUri('/');
      }

      // Remove the widget
      this.signIn.remove();

      // In this flow the redirect to Okta occurs in a hidden iframe
      this.oktaAuth.handleLoginRedirect(tokens);
    }).catch(err => {
      // Typically due to misconfiguration
      console.log(err);
      throw err;
    });
  }

}
