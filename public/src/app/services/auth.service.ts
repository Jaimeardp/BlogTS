import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';

import { UserService } from '../services/user.service';

@Injectable()
export class AuthService {
  loggedIn = false;
  isAdmin = false;

  jwtHelper: JwtHelper = new JwtHelper();

  currentUser = { _id: '', username: '', role: '' };

  constructor(private userService: UserService,
              private router: Router) {
    console.log("eNTA");
    const token = localStorage.getItem('acces_token');
    console.log(token);
    if (token) {
      const decodedUser = this.decodeUserFromToken(token);
      this.setCurrentUser(decodedUser);
    }
  }

  login(emailAndPassword) {
    return this.userService.login(emailAndPassword).map(res => res.json()).map(
      res => {
        localStorage.setItem('token', res.token);
        const decodedUser = this.decodeUserFromToken(res.token);
        console.log(decodedUser);
        
        this.setCurrentUser(decodedUser);
        console.log("Verificar Boolean");
        console.log(this.loggedIn);
        return this.loggedIn;
      }
    );
  }

  logout() {
    localStorage.removeItem('acces_token');
    this.loggedIn = false;
    this.isAdmin = false;
    console.log(this.currentUser);
    //this.currentUser = { _id: '', username: '', role: '' };
    this.router.navigate(['/']);
  }

  decodeUserFromToken(token) {
    return this.jwtHelper.decodeToken(token);

  }

  setCurrentUser(decodedUser){
    this.loggedIn = true;
    //this.currentUser._id = decodedUser._id;
    //this.currentUser.username = decodedUser.username;
    //this.currentUser.role = decodedUser.role;
    console.log(this.currentUser);
    //decodedUser.role === 'admin' ? this.isAdmin = true : this.isAdmin = false;
    //delete decodedUser.role;
  }

}