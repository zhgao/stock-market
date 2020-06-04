import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockExchangeService {

  private baseUrl = '/stock-exchange-service/api/v1/stock-exchanges';

  constructor(private apiService: ApiService) { }

  getList(page: number, size: number): Observable<any> {
    return this.apiService.get(`${this.baseUrl}?page=${page}&size=${size}`);
  }

  create(body: any): Observable<any> {
    return this.apiService.post(this.baseUrl, body);
  }

  update(id: number, body: any): Observable<any> {
    return this.apiService.put(`${this.baseUrl}/${id}`, body);
  }

}
