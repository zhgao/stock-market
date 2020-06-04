import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { ApiService } from './api.service';
import { ResponseResult } from '../models/ResponseResult';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = '/user-service/api/v1';

  constructor(private apiService: ApiService) { }

  login(username:string, password:string): Observable<any> {
    return this.apiService.post(`${this.baseUrl}/login`, {username: username, password: password})
  }

  logout() {
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('expires_at');
    sessionStorage.removeItem('user_info');
  }

  isLoggedIn() {
    return moment(JSON.parse(moment().format('X'))).isBefore(this.getExpiration());
  }

  isRole(role: string) {
    let userRole = '';
    const userInfo = sessionStorage.getItem('user_info');
    if (userInfo) userRole = JSON.parse(userInfo).role;
    if (userRole == role) return true;
    return false;
  }

  getUsername() {
    let username = '';
    const userInfo = sessionStorage.getItem('user_info');
    if (userInfo) username = JSON.parse(userInfo).username;
    return username;
  }

  getUserId() {
    let userId;
    const userInfo = sessionStorage.getItem('user_info');
    if (userInfo) userId = JSON.parse(userInfo).id;
    return userId;
    ;
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  private getExpiration() {
    const expiration = sessionStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  } 

  public setSession(result: ResponseResult) {
    if (result.code == 0) {
      const token = result.data.Authorization;
      const tokenDecoded = this.parseJwt(token);
      sessionStorage.setItem('access_token', token);
      const userInfo = {"id": tokenDecoded.id, "username": tokenDecoded.sub, "role": tokenDecoded.roles[0]}
      sessionStorage.setItem('user_info', JSON.stringify(userInfo));
      sessionStorage.setItem('expires_at', JSON.stringify(tokenDecoded.exp));
    }
  }

  private parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
    
};
}
