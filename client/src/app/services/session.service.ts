import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SessionService {
option = { withCredentials: true};
  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(user) {

    console.log(user);
    return this.http.post(`http://logosapp.herokuapp.com/auth/signup`, user, this.option)
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {
    console.log(user);
    return this.http.post(`http://logosapp.herokuapp.com/auth/login`, user, this.option)
      .map(res => res.json())
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`http://logosapp.herokuapp.com/auth/logout`, {})
      .map(res => res.json())
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`http://logosapp.herokuapp.com/auth/loggedin`, this.option)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getUser(id) {
    return this.http.get(`http://logosapp.herokuapp.com/auth/user/${id}`, this.option)
      .map(res => res.json())
      .catch(this.handleError);
  }

  updateUser(id, info) {
    return this.http.post(`http://logosapp.herokuapp.com/auth/user/${id}`, info, this.option)
      .map(res => res.json())
      .catch(this.handleError);
  }

  isLoggedInHome() {
    return this.http.get(`http://logosapp.herokuapp.com/auth/loggedinhome`, this.option)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getPrivateData() {
    return this.http.get(`http://logosapp.herokuapp.com/auth/private`, this.option)
      .map(res => res.json())
      .catch(this.handleError);
  }
}
