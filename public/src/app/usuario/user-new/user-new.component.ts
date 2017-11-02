import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css'],
})
export class UserNewComponent implements OnInit {

registerForm: FormGroup;
  name = new FormControl('',[
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30)
  ])
  username = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    Validators.pattern('[a-zA-Z0-9_-\\s]*')
  ]);
  email = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100)
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);
  role = new FormControl('', [
    Validators.required
  ]);

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password,
      role: this.role
    });
  }

  setClassName() {
    return { 'has-danger': !this.name.pristine && !this.name.valid };
  }

  setClassUsername() {
    return { 'has-danger': !this.username.pristine && !this.username.valid };
  }
  setClassEmail() {
    return { 'has-danger': !this.email.pristine && !this.email.valid };
  }
  setClassPassword() {
    return { 'has-danger': !this.password.pristine && !this.password.valid };
  }

  register() {
    this.userService.register(this.registerForm.value).subscribe(
      res => {
        console.log("COMPLETADO! - CREAR USUARIO");
        this.router.navigate(['/login']);
      },
      error => {console.log("ERROR! - CREAR USUARIO ")}
    );
  }

}
