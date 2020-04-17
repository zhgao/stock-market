import { Injectable } from '@angular/core';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {

constructor() { }

}

getUsers(){
return [
  {id: 1,
   username: "gwq",
   password: 11111111,
  usertype: admin,
  email:"zhgao@foxmail.com",
  mobilenumber:"13942661420",
  confirmed: true;
}
]
}
