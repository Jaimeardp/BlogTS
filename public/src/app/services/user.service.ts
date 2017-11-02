import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import {User} from '../usuario/user';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/publishReplay';

@Injectable()
export class UserService {

  _users:Observable<any> = null;

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8',
    'Authorization':`Bearer ${ localStorage.getItem('token')}`});
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  register(user): Observable<any> {
    return this.http.post('/signup', JSON.stringify(user), this.options);
  }

  login(credentials): Observable<any> {
    return this.http.post('/signin', JSON.stringify(credentials), this.options);
  }

  clearCache(){
    this._users = null;
  }

  getUsers(): Observable<any> {
    if(!this._users){
    this._users = this.http.get('/users')
                  .map(res => res.json())
                  .do(users => console.log('fetched friends'))
                  .publishReplay(1)
                  .refCount()
    }
    return this._users;

  }

  _errHandler(err :Response){
    console.error(err);
    return Observable.throw(err || "Server Error");
  }

  /*getUsers() {
    return this.http.get('/users',this.options)
    .map(data => data.json());
  }*/

  countUsers(): Observable<any> {
    return this.http.get('/api/users/count').map(res => res.json());
  }

  addUser(user): Observable<any> {
    return this.http.post('/signup', JSON.stringify(user), this.options);
  }

  getUser(user): Observable<any> {
    return this.http.get(`/api/user/${user._id}`).map(res => res.json());
  }

  editUser(user): Observable<any> {
    return this.http.put(`/api/user/${user._id}`, JSON.stringify(user), this.options);
  }

  deleteUser(user): Observable<any> {
    return this.http.delete(`/api/user/${user._id}`, this.options);
  }



}