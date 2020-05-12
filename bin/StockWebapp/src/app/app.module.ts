import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImportexcelComponent } from './components/importexcel/importexcel.component';
import { ManagecompaniesComponent } from './components/managecompanies/managecompanies.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { ManagestockexchangesComponent } from './components/managestockexchanges/managestockexchanges.component';
import { CreatecompanyComponent } from './components/createcompany/createcompany.component';
import { ComparisionchartsComponent } from './components/comparisioncharts/comparisioncharts.component';
import { UsersignupComponent } from './components/usersignup/usersignup.component';
import { IposComponent } from './components/ipos/ipos.component';
import { IpoitemComponent } from './components/ipoitem/ipoitem.component';

@NgModule({
  declarations: [
    AppComponent,
    ImportexcelComponent,
    ManagecompaniesComponent,
    UserloginComponent,
    ManagestockexchangesComponent,
    CreatecompanyComponent,
    ComparisionchartsComponent,
    UsersignupComponent,
    IpoitemComponent,
    IposComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
