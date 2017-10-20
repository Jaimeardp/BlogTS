import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jaime Robles';
  name = '';
  mynotes = [
  	{id:1,title:"Mi Blog",content:"Terminando mi blog"},
  	{id:2,title:"Mi Segundo Blog",content:"Acabando Ya!"},
  	{id:3,title:"Python Begin",content:"Casi Acabo"}
  ];
  note = {id:null,title:null,content:null};
  show_form = false;
  editing = false;
  aux = {id:null,title:null,content:null};
  addNote(){
  	this.show_form = true;
  }
  cancel(){
  	this.show_form = false;
  	this.mynotes.forEach((el,i) =>{
  		if (el.id === this.note.id){
  			this.mynotes[i] = this.aux;
  			//console.log(this.aux);
  		}
  	});  	
  }
  createNote(){
  	if(this.editing){
  		var me = this;
  		this.mynotes.forEach((el,i) =>{
  			if (el.id === me.note.id){
  				me.mynotes[i] = me.note;
  			}
  		});
  		me.show_form=false;
  		this.editing=false;
  		this.note = {id:null,title:null,content:null};
  	}else{
  		this.note.id=Date.now();
  		this.mynotes.push(this.note);
  		this.show_form = false;
  		this.note = {id:null,title:null,content:null};
  	}
  }
  viewNote(note){
  	this.aux = note;
  	console.log(this.aux);
  	this.note = note;
  	this.show_form = true;
  	this.editing = true;
  }
}
