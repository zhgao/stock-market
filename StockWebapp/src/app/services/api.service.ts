import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseResult } from '../models/ResponseResult';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private baseUrl = 'http://localhost:8080';
 
  //private baseUrl = '/api/v1';

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(this.composeUrl(url));
  }

  download(url: string) {
    return this.http.get(this.composeUrl(url), {responseType: 'blob'});
  }

  post(url: string, body: any) {
    return this.http.post(this.composeUrl(url), body);
  }

  put(url: string, body: any) {
    return this.http.put(this.composeUrl(url), body);
  }

  private composeUrl(url: string): string {
    return `${this.baseUrl}${url}`;
    //return url;
  }
}
