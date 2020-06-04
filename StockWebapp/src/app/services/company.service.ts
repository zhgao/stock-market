import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private baseUrl = '/company-service/api/v1/companies';

  constructor(
    private apiService: ApiService
  ) { }

  getList(q: string, page: number, size: number): Observable<any> {
    let queryString = q == null ? `page=${page}&size=${size}` : `q=${q}&page=${page}&size=${size}`;
    return this.apiService.get(`${this.baseUrl}?${queryString}`);
  }

  create(body: any): Observable<any> {
    return this.apiService.post(this.baseUrl, body);
  }

  update(id: number, body: any): Observable<any> {
    return this.apiService.put(`${this.baseUrl}/${id}`, body);
  }

  updateStatus(id: number, active: boolean): Observable<any> {
    return this.apiService.put(`${this.baseUrl}/${id}/activation?active=${active}`, null);
  }
}
