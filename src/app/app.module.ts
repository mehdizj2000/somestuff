import { SignupFormComponent } from './signup-form/signup-form.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SomecompoComponent } from './somecompo/somecompo.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseFormComponent } from './course-form/course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HttpClientModule } from '@angular/common/http';
import { CommDataComponent } from './comm-data/comm-data.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsComponent } from './posts/posts.component';
import { OktaAuthGuard, OktaAuthModule, OktaCallbackComponent, OKTA_CONFIG } from '@okta/okta-angular';
import { NgbdTypeaheadBasicComponent } from './ngbd-typeahead-basic/ngbd-typeahead-basic.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const CALLBACK_PATH = 'implicit/callback';

const appRoutes: Routes = [
  { path: CALLBACK_PATH, component: OktaCallbackComponent },
  { path: '', component: HomeComponent },
  { path: 'followers', component: GithubFollowersComponent, canActivate: [ OktaAuthGuard ] },
  { path: 'posts', component: PostsComponent, canActivate: [ OktaAuthGuard ] },
  { path: 'profile/:id', component: ProfileComponent, canActivate: [ OktaAuthGuard ] },
  { path: '**', component: NotFoundComponent, canActivate: [ OktaAuthGuard ] }
  // Other routes...
];

const config = {
  clientId: '0oa2eyj79sBmJWJ014x7',
  issuer: 'https://dev-647801.okta.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true
};

@NgModule({
  declarations: [
    AppComponent,
    SomecompoComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    ChangePasswordComponent,
    CommDataComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    NotFoundComponent,
    PostsComponent,
    NgbdTypeaheadBasicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    OktaAuthModule,
    NgbModule
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: config }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
