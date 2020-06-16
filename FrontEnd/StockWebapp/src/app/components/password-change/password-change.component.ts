import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';
import { AlertService } from 'src/app/services/alert.service';
import { CustomValidators } from 'src/app/utils/custom-validators';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  passwordForm: FormGroup;
  submitted = false;

  @Input() public userId: number;

  constructor(
    private activeModal: NgbActiveModal, 
    private fb: FormBuilder,
    private userService: UserService,
    private alterService: AlertService
  ) { }

  ngOnInit() {
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmedPassword: ['', [Validators.required]]
    },
    { validator: CustomValidators.passwordMatchValidator });
  }

  updatePassword() {
    this.submitted = true;

    if (this.passwordForm.invalid) return;

    this.userService.updatePassword(this.userId, this.passwordForm.value)
      .subscribe(res => {
        let messageType = 'success';
        if (res.code == 0) {
          this.activeModal.close('update completed');
        } else {
          messageType = 'error';
        }
        this.alterService.alert(messageType, res.message);
      })

  }

  get f() { return this.passwordForm.controls }

}
