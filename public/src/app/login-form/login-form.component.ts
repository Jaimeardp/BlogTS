import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
//import {UserService} from '../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  tipo = 0;
  constructor(private router:Router) { }

  ngOnInit() {
  }


  loginUser(e){
  	e.preventDefault();
  	console.log(e);
  	var username = e.target.elements[1].value;
  	var pass = e.target.elements[2].value;
  	console.log(username);
  	console.log(pass);

  	 if(username == 'admin' && pass == 'admin') {
      //this.user.setUserLoggedIn();
  		this.router.navigate(['/dashboard']);
  	}
  	return false;
  }

  createUser(){
    this.tipo = 1;
  	console.log('Entro');
  	this.router.navigate(['/usuario',this.tipo]);
  	return false;
  }
}
