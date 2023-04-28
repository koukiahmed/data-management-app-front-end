import { Routes, CanActivate } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { ErrorComponent } from '../error/error.component';
import { AdminComponent } from '../admin/admin.component';
import { LogoutComponent } from '../logout/logout.component';
import { HomeAdminComponent } from '../admin/home-admin/home-admin.component';
import { RegisterComponent } from '../register/register.component';
import { AuthGuard } from '../guard/auth.guard';


export const routes: Routes = [
  {
    path:'', redirectTo: 'login' , pathMatch:'full' //if url empty redirect user to login interface
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'register', component: RegisterComponent
  },
  {
    path:'home', component: HomeComponent,canActivate:[AuthGuard] //check guard for open interface
  },
  {
    path:'logout', component: LogoutComponent
  },
  {
    path:'admin', component: AdminComponent, canActivate:[AuthGuard] ,children: [
      {path: 'homeAdmin', component: HomeAdminComponent},
    ]
  },
  {
    path:'**', component: ErrorComponent //if no one of other url redirect user to error interface
  },




];
