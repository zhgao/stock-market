import { Component, OnInit } from '@angular/core';
import { UserloginService } from '../../services/userlogin.service';
import { User } from '../../modules/User';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css'],
})
export class UserloginComponent implements OnInit {
  users: User[];

  constructor(private userloginService: UserloginService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userloginService.getUsers().subscribe((users) => (this.users = users));
  }
}
