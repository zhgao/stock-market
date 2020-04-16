import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImportexcelComponent } from './importexcel/importexcel.component';
import { ManagecompaniesComponent } from './managecompanies/managecompanies.component';
import { ManageipoComponent } from './manageipo/manageipo.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ManagestockexchangesComponent } from './managestockexchanges/managestockexchanges.component';
import { CreatecompanyComponent } from './createcompany/createcompany.component';
import { ComparisionchartsComponent } from './comparisioncharts/comparisioncharts.component';
import { UsersignupComponent } from './usersignup/usersignup.component';

@NgModule({
   declarations: [
      AppComponent,
      ImportexcelComponent,
      ManagecompaniesComponent,
      ManageipoComponent,
      UserloginComponent,
      ManagestockexchangesComponent,
      CreatecompanyComponent,
      ComparisionchartsComponent,
      UsersignupComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
