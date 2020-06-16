import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockPriceService {

  private baseUrl = '/stock-price-service/api/v1/stock-prices';

  constructor(private apiService: ApiService) { }

  generateChartsForCompanies(body): Observable<any> {
    return this.apiService.post(`${this.baseUrl}/charts`, body);
  }

  getList(page: number, size: number): Observable<any> {
    return this.apiService.get(`${this.baseUrl}?page=${page}&size=${size}`);
  }

  downloadTemplate(filename): Observable<any> {
    return this.apiService.download(`${this.baseUrl}/templates?filename=${filename}`)
  }

  upload(file): Observable<any> {
    let formData = new FormData();
    formData.append('file', file, file.name);
    return this.apiService.post(`${this.baseUrl}/upload`, formData);
  }
}
