import { LoginComponent } from './login/login.component';
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
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsComponent } from './posts/posts.component';
import { OktaAuthGuard, OktaAuthModule, OktaCallbackComponent, OKTA_CONFIG } from '@okta/okta-angular';
import { NgbdTypeaheadBasicComponent } from './ngbd-typeahead-basic/ngbd-typeahead-basic.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import sampleConfig from './app.config';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserUpdateComponent } from './user-update/user-update.component';

const CALLBACK_PATH = 'login/callback';

const oktaConfig = Object.assign({
  onAuthRequired: (oktaAuth, injector) => {
    const router = injector.get(Router);
    router.navigate(['/login']);
  }
}, sampleConfig.oidc);

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: CALLBACK_PATH, component: OktaCallbackComponent },
  { path: 'login', component: LoginComponent },
  { path: 'followers', component: GithubFollowersComponent, canActivate: [OktaAuthGuard] },
  { path: 'user-info', component: UserInfoComponent, canActivate: [OktaAuthGuard] },
  { path: 'user-update/:username', component: UserUpdateComponent, canActivate: [OktaAuthGuard] },
  { path: 'posts', component: PostsComponent, canActivate: [OktaAuthGuard]},
  { path: 'profile/:id', component: ProfileComponent, canActivate: [OktaAuthGuard] },
  { path: '**', component: NotFoundComponent }
  // Other routes...
];

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
    NgbdTypeaheadBasicComponent,
    UserInfoComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    OktaAuthModule,
    NgbModule
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: oktaConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
