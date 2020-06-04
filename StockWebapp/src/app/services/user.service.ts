import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = '/user-service/api/v1';

  constructor(private apiService: ApiService) { }

  getUser(userId: number): Observable<any> {
    return this.apiService.get(`${this.baseUrl}/users/${userId}`);
  }

  updateProfile(userId: number, body: any): Observable<any> {
    return this.apiService.put(`${this.baseUrl}/users/${userId}/profiles`, body);
  }

  updatePassword(userId: number, body: any): Observable<any> {
    delete body.confirmedPassword;
    return this.apiService.put(`${this.baseUrl}/users/${userId}/password`, body);
  }

  register(body: any): Observable<any> {
    delete body.confirmedPassword;
    return this.apiService.post(`${this.baseUrl}/registration`, body);
  }

  verifyRegistration(token: string): Observable<any> {
    return this.apiService.post(`${this.baseUrl}/registration/confirmation?token=${token}`, null)
  }
}
