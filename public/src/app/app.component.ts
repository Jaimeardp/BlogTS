import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html'
  //styleUrls: ['./app.component.css']
})
export class AppComponent {

	tipolis = 0;

  constructor(private router:Router,public auth: AuthService){
  	console.log("Warning!!!");
  }

   listUsuario(){
   	console.log("Martes Octubre");
  	this.tipolis = 2;
    if(this.auth.loggedIn){
      console.log("Mariana Novoa Bardale");
      this.router.navigate(['/usuario',this.tipolis]);
    }else{
      this.router.navigate(['/']);
    }
  	return false;
  }
}
