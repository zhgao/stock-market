import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/utils/custom-validators';
import { UserService } from 'src/app/services/user.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmedPassword: ['', [Validators.required]],
    },
    { validator: CustomValidators.passwordMatchValidator })
  }

  signup() {
    this.submitted = true;

    if (this.signupForm.invalid) return true;

    this.userService.register(this.signupForm.value)
      .subscribe(res => {
        if (res.code == 0) {
          this.alertService.alert("info", 'Confirm email is sent to your email box, please activate your account in the email.')
          this.router.navigateByUrl('/login')
        } else {
          this.alertService.alert("error", res.message);
        }
      })
  }

  get f() { return this.signupForm.controls }

}
