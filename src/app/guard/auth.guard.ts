import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private user: UsersService, private router: Router, private toastr: ToastrService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      //test if user logged in from session storage then check his role for open admin space with url
      //if user never logged or just logout then redirect him to login

      if (this.user.isLoggedIn()) {
        if (route.url.length > 0) {
          let url = route.url[0].path;
          if (url == 'admin') {
            if (this.user.getRole() == 'admin') {
              return true;
            } else {
              this.router.navigate(['home']);
                this.toastr.warning("Vous n'avez pas accès.")
              return false;
            }
          }else{
            return true;
          }
        } else {
          return true;
        }
      }
      else {
        this.router.navigate(['login']);
        return false;
      }
    }
}
