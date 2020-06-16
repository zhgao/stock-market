import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { AlertService } from 'src/app/services/alert.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profileForm: FormGroup;
  submitted = false;

  @Input() public user: User;

  constructor(
    private activeModal: NgbActiveModal, 
    private fb: FormBuilder,
    private userService: UserService,
    private alterService: AlertService
  ) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      contactNumber: [this.user.contactNumber, [Validators.required]],
      email: [this.user.email, [Validators.required, Validators.email]]
    });
  }

  updateProfile() {
    this.submitted = true;

    if (this.profileForm.invalid) return;

    this.userService.updateProfile(this.user.id, this.profileForm.value)
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

  get f() { return this.profileForm.controls }

}
