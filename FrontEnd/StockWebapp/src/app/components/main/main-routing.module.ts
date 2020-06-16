import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { LandingComponent } from '../landing/landing.component';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { AccountVerificationComponent } from '../account-verification/account-verification.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'index', component: LandingComponent, canActivate: [AuthGuardService] },
  { path: 'account/verification', component: AccountVerificationComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class MainRoutingModule { }
