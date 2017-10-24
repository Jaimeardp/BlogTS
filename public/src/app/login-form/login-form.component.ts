import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


import { AuthService } from '../services/auth.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  tipo = 0;

  loginForm: FormGroup;

  username = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]);
  password = new FormControl('', [Validators.required, Validators.minLength(5)]);

  constructor(private auth: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    console.log("HERE SAME");
    if (this.auth.loggedIn) {
      this.router.navigate(['/dashboard']);
    }
    this.loginForm = this.formBuilder.group({
      username: this.username,
      password: this.password
    });
  }

  setClassEmail() {
    return { 'has-danger': !this.username.pristine && !this.username.valid };
  }
  setClassPassword() {
    return { 'has-danger': !this.password.pristine && !this.password.valid };
  }
  login(){
    this.auth.login(this.loginForm.value).subscribe(
      res => this.router.navigate(['/dashboard']),
      error => {console.log(this.loginForm.value)}
    );
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
