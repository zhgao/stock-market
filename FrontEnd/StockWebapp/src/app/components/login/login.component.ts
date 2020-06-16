import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    this.submitted = true;

    if (this.loginForm.invalid) { 
      return;
    }

    const val = this.loginForm.value;
    this.authService.login(val.username, val.password)
      .subscribe(
        res => {
          if (res.code == 0) {
            this.authService.setSession(res);
            this.router.navigateByUrl('/index');
          } else  {
            this.alertService.alert("error", res.message)
          }
        },
        error => {
          if (error.status == 401) {
            this.alertService.alert("error", "Incorrect username or password")
          }
        }
      );
  }

  get f() { return this.loginForm.controls }

}
