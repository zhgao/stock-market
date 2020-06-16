import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IpoService } from 'src/app/services/ipo.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-ipo-details',
  templateUrl: './ipo-details.component.html',
  styleUrls: ['./ipo-details.component.css']
})
export class IpoDetailsComponent implements OnInit {

  ipoForm: FormGroup;
  submitted = false;

  @Input() ipoDetails;
  @Input() companyOptions: any[];
  @Input() stockExchangeOptions: any[];

  @Output() notifyParent = new EventEmitter<string>();;

  constructor(
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private ipoService: IpoService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.ipoForm = this.fb.group({
      companyId: [this.ipoDetails == null ? '' : this.ipoDetails.companyId, Validators.required],
      companyCode: [this.ipoDetails == null ? '' : this.ipoDetails.companyCode, Validators.required],
      stockExchangeId: [this.ipoDetails == null ? '' : this.ipoDetails.stockExchangeId, Validators.required],
      pricePerShare: [this.ipoDetails == null ? '' : this.ipoDetails.pricePerShare, Validators.required],
      totalShare: [this.ipoDetails == null ? '' : this.ipoDetails.totalShare, Validators.required],
      openDatetime: [this.ipoDetails == null ? '' : new Date(this.ipoDetails.openDatetime), Validators.required],
      remarks: [this.ipoDetails == null ? '' : this.ipoDetails.remarks]
    })
  }

  save() {
    this.submitted = true;
    if (this.ipoForm.invalid) return;

    let ipoDetails = this.ipoForm.value;
    this.companyOptions.forEach(element => {
      if (element.id == this.ipoForm.value.companyId) {
        ipoDetails.companyName = element.name;
        return;
      }
    });
    this.stockExchangeOptions.forEach(element => {
      if (element.id == this.ipoForm.value.stockExchangeId) {
        ipoDetails.stockExchangeName = element.name;
        return;
      }
    });

    if (this.ipoDetails == null) {
      this.ipoService.create(ipoDetails).subscribe(res => {
        if (res.code == 0) {
          this.notifyParent.emit('success');
            this.activeModal.close('creation completed');
            this.alertService.alert('success', `New IPO for ${ipoDetails.companyName} in Stock Exchange ${ipoDetails.stockExchangeName} is created successfully.`);
        }
      })
    } else {
      this.ipoService.update(this.ipoDetails.id, ipoDetails).subscribe(res => {
        if (res.code == 0) {
          this.notifyParent.emit('success');
            this.activeModal.close('update completed');
            this.alertService.alert('success', `IPO for ${ipoDetails.companyName} in Stock Exchange ${ipoDetails.stockExchangeName} is updated successfully.`);
        }
      })
    }

  }

  get f() { return this.ipoForm.controls }

}
