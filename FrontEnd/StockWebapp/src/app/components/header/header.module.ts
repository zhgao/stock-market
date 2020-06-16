import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { PasswordChangeComponent } from '../password-change/password-change.component';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    UserProfileComponent,
    PasswordChangeComponent
  ]
})
export class HeaderModule { }
