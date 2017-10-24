import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardLogin implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    if(this.auth.loggedIn) {
      return true;
    } else {
      this.router.navigate(['unauthorized']);
      return false;
    }
  }

}