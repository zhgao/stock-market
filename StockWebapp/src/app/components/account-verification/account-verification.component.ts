import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account-verification',
  templateUrl: './account-verification.component.html',
  styleUrls: ['./account-verification.component.css']
})
export class AccountVerificationComponent implements OnInit {

  message: string;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    const token = this.route.snapshot.queryParams.token;
    console.log(this.route)
    console.log(`token : ${token}`)
    this.userService.verifyRegistration(token)
      .subscribe(res => this.message = res.message);
  }

}
