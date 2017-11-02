import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service'; // (./) Desde aqui mismo nivel
import { User } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
    tipo = 0;
    cad = "";
    usersArr= [
     	//new User(1, 'jose', 'alcatara', 'jose@gmail.com'),
    	//new User(2, 'jose', 'alcatara', 'jose@gmail.com'),
    	//new User(3, 'jose', 'alcatara', 'jose@gmail.com')
  	];

   // users = [];

  constructor(private route:ActivatedRoute,
  	private _userService:UserService, private router:Router
  	) { 
  }
// Ejecutar codigo a penas el componente se genere
  ngOnInit() {

    //this._userService.getUsers().subscribe(
     // data => this.usersArr=data);
    //console.log(this.usersArr);
    //this.getUsers();
    //console.log("Hola Lista");
    //this.route.params.subscribe(params =>{
      //const id = params;
      //console.log("RUTA : ");
      //console.log(id);
      //this.cad = id;
      //console.log(this.usersArr);
      //this.tipo = Number(id);
     
    //this.cad = this.route.snapshot.routeConfig.children[0].path;
    //console.log(this.route.snapshot.routeConfig.children[0].path);
   // });

}

  /*Login(user:User){
    this._userService.login(user)
      .subscribe(
        usuario => setTimeout(()  => console.log(usuario),0),
        error => console.log('Jaime Te Equivocaste')
      );
  }*/

  /*getUsers(){
    console.log("Lista Por Favor")
  	this._userService.getUsers().subscribe(
      res => this.usersArr=res
     );
  }

 /* getUsers(){
    console.log("Lista Por Favor")
    this._userService.getUsers()
      .subscribe(usuarios => this.users = usuarios);
  }*/

  /*create(user:User){
    console.log("Jaime Mariana");
      this._userService.addUser(user)
      .then(status => this.getUsers())
      .catch(err => console.log(err));
    console.log("Vital");
    console.log(user);
    this.users.push(user);
    this._userService.addUser(user);
    console.log(this.user);
    this._userService.addUser(user).
    subscribe(status => console.log("Todo Ok!!!!!!"))*/
  //}

  /*destroy(user:User){
    const i = this.users.indexOf(user); 
    this.users.splice(i,1)
  }*/

}
