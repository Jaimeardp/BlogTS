import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service'; // (./) Desde aqui mismo nivel
import { User } from './user';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
    tipo = 0;
    users: User[] = [
     	//new User(1, 'jose', 'alcatara', 'jose@gmail.com'),
    	//new User(2, 'jose', 'alcatara', 'jose@gmail.com'),
    	//new User(3, 'jose', 'alcatara', 'jose@gmail.com')
  	];
  constructor(private route:ActivatedRoute,
  	private _userService:UserService
  	) { 
  }
// Ejecutar codigo a penas el componente se genere
  ngOnInit() {
    console.log("Hola Lista");
  	this.getUsers();
    this.route.params.subscribe(params =>{
      const id = params['id'];
      console.log(Number(id)+3);
      this.tipo = Number(id);
    });
  }

  Login(user:User){
    this._userService.login(user)
      .subscribe(
        usuario => setTimeout(()  => this.users = usuario,0),
        error => console.log('Jaime Te Equivocaste')
      );
  }

  getUsers(){
    console.log("Lista Por Favor")
  	this._userService.getUsers()
  		.subscribe(usuarios => this.users = usuarios);
  }

  create(user:User){
    /*console.log("Jaime Mariana");
      this._userService.addUser(user)
      .then(status => this.getUsers())
      .catch(err => console.log(err));
    /*console.log("Vital");
    console.log(user);
    this.users.push(user);
    this._userService.addUser(user);
    console.log(this.users)*/
    this._userService.addUser(user).
    subscribe(status => this.getUsers())
  }

  /*destroy(user:User){
    const i = this.users.indexOf(user); 
    this.users.splice(i,1)
  }*/

}
