import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css'],
})
export class UserNewComponent implements OnInit {
  activateC = false;
  @Output() createNewUserEvent = new EventEmitter();
  newUser = new User;	
  constructor(private router:Router) {}

  ngOnInit() {
    this.activateC=true;
  }

  create() {
  	this.createNewUserEvent.emit(this.newUser);
    console.log(this.newUser);
    this.newUser = new User();
    console.log(this.activateC);
    this.router.navigate(['/']);
  }

}
