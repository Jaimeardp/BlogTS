import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from './../user';
import { UsuarioComponent } from '../usuario.component';
import { UserService } from '../../services/user.service';
import { DoCheck } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  users= [];
  
  subscription;

  cad = true;

  display = {first:true, second:true};

  errorMssg:string="";
	//@Input () users;
	@Output() destroyUserEvent = new EventEmitter();
	@Output() updateUserEvent = new EventEmitter();
  constructor(private userService:UserService) {

   }

  getusers(){
    console.log("Entrooooo°")
    this.subscription = this.userService.getUsers().subscribe(res => {this.users=res
      console.log(res[0].username)},
                                                               err => console.log(err));
  }

  time(){
    setTimeout(()=> {console.log("Time!!!")
      this.getusers()},9000);
  }


  ngOnInit() {
    this.getusers();
    //console.log("Below");
    //console.log(this.users);
    //console.log(this.cad);
    //this.cad = false;
  }

  /*ngDoCheck(){
    this.getusers();
  }*/

  destroy(user: User){
    const response = confirm('delete?')
    if(response) {
      this.destroyUserEvent.emit(user);      
    }
  }

  update(){

  }

  remove(list){
    this.display[list] = false;
  }
  
  reset(){
    this.display = {first:true, second:true};
  }
  
  clearCache(){
    this.userService.clearCache();
  } 

  /*getusers(){
    let set = [];
    this.userService.getUsers().subscribe(
      data=> {for(let i in data){
                set.push(data[i])
            }  
      },
      err => this.errorMssg = err;

    this.cad=false;
    console.log(set);
    this.users = set;
    //this.users.push(set);
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    console.log("-------------------------------")
  }*/






}
