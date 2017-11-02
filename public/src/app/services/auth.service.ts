import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
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
    //var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //console.log(currentUser);

    console.log("-------------Entra Constructor Auth Service----------------");
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      const decodedUser = this.decodeUserFromToken(token);
      console.log(decodedUser);
      console.log("Acontinuacion Decode User");
      this.setCurrentUser(decodedUser);
    }
  }

  login(emailAndPassword) {
    return this.userService.login(emailAndPassword).map(res => res.json()).map(
      res => {
        
        //localStorage.setItem('currentUser',JSON.stringify(emailAndPassword));
        localStorage.setItem('token', res.token);

        const decodedUser = this.decodeUserFromToken(res.token);

        console.log(decodedUser);
        //console.log();
        
        this.setCurrentUser(decodedUser);

        console.log("Verificar Boolean");
        console.log(this.loggedIn);

        return this.loggedIn;
      }
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.loggedIn = false;
    this.isAdmin = false;
    //console.log(this.currentUser);
    //this.currentUser = { _id: '', username: '', role: '' };
    this.router.navigate(['/']);
  }

  decodeUserFromToken(token) {
    console.log("below decode")
    console.log(this.jwtHelper.decodeToken(token));

    return this.jwtHelper.decodeToken(token);

  }

  setCurrentUser(decodedUser){
    this.loggedIn = true;
    console.log(decodedUser);
    this.currentUser._id = decodedUser._id;
    //console.log(this.currentUser._id);
    this.currentUser.username = decodedUser.username;
    this.currentUser.role = decodedUser.role;
    decodedUser.role === 'admin' ? this.isAdmin = true : this.isAdmin = false;
    delete decodedUser.role;
    console.log(this.currentUser);
  }

}