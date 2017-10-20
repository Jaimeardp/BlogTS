import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  tipolis = 0;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  listUsuario(){
  	this.tipolis = 2;
  	this.router.navigate(['/usuario',this.tipolis]);
  	return false;
  }

}
