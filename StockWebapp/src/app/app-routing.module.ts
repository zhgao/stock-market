import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { UsersignupComponent } from './components/usersignup/usersignup.component';
import { CreatecompanyComponent } from './components/createcompany/createcompany.component';
import { ComparisionchartsComponent } from './components/comparisioncharts/comparisioncharts.component';
import { ImportexcelComponent } from './components/importexcel/importexcel.component';
import { ManagecompaniesComponent } from './components/managecompanies/managecompanies.component';
import { IposComponent } from './components/ipos/ipos.component';
import { IpoitemComponent } from './components/ipoitem/ipoitem.component';
import { ManagestockexchangesComponent } from './components/managestockexchanges/managestockexchanges.component';

const routes: Routes = [
  { path: 'ipos', component: IposComponent },
  { path: 'ipoitem', component: IpoitemComponent },
  { path: 'userlogin', component: UserloginComponent },
  { path: 'usersignup', component: UsersignupComponent },
  { path: 'createcompany', component: CreatecompanyComponent },
  { path: 'comparisioncharts', component: ComparisionchartsComponent },
  { path: 'importexcel', component: ImportexcelComponent },
  { path: 'managecompanies', component: ManagecompaniesComponent },
  { path: 'managestocketexchange', component: ManagestockexchangesComponent },
  { path: '', redirectTo: '/userlogin', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
