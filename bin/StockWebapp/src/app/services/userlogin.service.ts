import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../modules/User';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';

@Injectable({
  providedIn: 'root',
})
export class UserloginService {
  constructor() {}

  getUsers(): Observable<User[]> {
    return of();
  }
}
