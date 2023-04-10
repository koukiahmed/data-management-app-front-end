import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { ErrorComponent } from '../error/error.component';
import { AdminComponent } from '../admin/admin.component';
import { LoginAdminComponent } from '../admin/login-admin/login-admin.component';
import { LogoutComponent } from '../logout/logout.component';
import { HomeAdminComponent } from '../admin/home-admin/home-admin.component';
import { LogoutAdminComponent } from '../admin/logout-admin/logout-admin.component';


export const routes: Routes = [
  {
    path:'', redirectTo: 'login' , pathMatch:'full'
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'home', component: HomeComponent
  },
  {
    path:'logout', component: LogoutComponent
  },
  {
    path:'admin', component: AdminComponent, children: [
      {path: 'loginAdmin', component: LoginAdminComponent},
      {path: 'homeAdmin', component: HomeAdminComponent},
      {path: 'logoutAdmin', component: LogoutAdminComponent},
    ]
  },
  {
    path:'**', component: ErrorComponent
  },




];
