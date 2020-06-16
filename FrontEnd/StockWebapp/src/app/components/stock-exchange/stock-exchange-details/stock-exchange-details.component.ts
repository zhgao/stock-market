import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StockExchangeService } from 'src/app/services/stock-exchange.service';
import { AlertService } from 'src/app/services/alert.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StockExchange } from 'src/app/models/StockExchange';

@Component({
  selector: 'app-stock-exchange-details',
  templateUrl: './stock-exchange-details.component.html',
  styleUrls: ['./stock-exchange-details.component.css']
})
export class StockExchangeDetailsComponent implements OnInit {

  seForm: FormGroup;
  submitted = false;

  @Input() stockExchange: StockExchange;

  @Output() notifyParent = new EventEmitter<string>();

  constructor(
    private activeModal: NgbActiveModal, 
    private fb: FormBuilder,
    private seService: StockExchangeService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.seForm = this.fb.group({
      stockExchange: [this.stockExchange === null ? '' : this.stockExchange.stockExchange, [Validators.required]],
      brief: [this.stockExchange === null ? '' : this.stockExchange.brief, [Validators.required]],
      contactAddress: [this.stockExchange === null ? '' : this.stockExchange.contactAddress, [Validators.required]],
      remarks: [this.stockExchange === null ? '' : this.stockExchange.remarks]
    })
  }

  save() {
    console.log(`modal save ${this.stockExchange}`)
    this.submitted = true;

    if (this.seForm.invalid) return;

    if (this.stockExchange === null) {
      console.log('create');
      this.seService.create(this.seForm.value)
        .subscribe(res => {
          if (res.code == 0) {
            this.notifyParent.emit('success');
            this.activeModal.close('creation completed');
            this.alertService.alert('success', `Stock exchange - ${this.seForm.value.stockExchange} is created successfully.`);
          }
        })
    } else {
      console.log('update');
      this.seService.update(this.stockExchange.id, this.seForm.value)
        .subscribe(res => {
          if (res.code == 0) {
            this.notifyParent.emit('success');
            this.activeModal.close('update completed');
            this.alertService.alert('success', `Stock exchange - ${this.seForm.value.stockExchange} is updated successfully.`);
          }
        })
    }
  }

  get f() { return this.seForm.controls }

}
