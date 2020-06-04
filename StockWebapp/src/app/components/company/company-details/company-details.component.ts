import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  companyForm: FormGroup;
  submitted = false;

  @Input() company;
  @Input() sectorOptions: any[];

  @Output() notifyParent = new EventEmitter<string>();;

  constructor(
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private companyService: CompanyService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.companyForm = this.fb.group({
      companyName: [this.company == null ? '' : this.company.companyName, Validators.required],
      ceo: [this.company == null ? '' : this.company.ceo, Validators.required],
      brief: [this.company == null ? '' : this.company.brief, Validators.required],
      directors: [this.company == null ? '' : this.company.directors],
      turnover: [this.company == null ? '' : this.company.turnover, Validators.required],
      sectorId: [this.company == null ? '' : this.company.sectorId, Validators.required]
    })
  }

  save() {
    this.submitted = true;
    if (this.companyForm.invalid) return;

    let company = this.companyForm.value;
    this.sectorOptions.forEach(element => {
      if (element.id == this.companyForm.value.sectorId) {
        company.sectorName = element.name;
        return;
      }
    });

    if (this.company == null) {
      this.companyService.create(company).subscribe(res => {
        if (res.code == 0) {
          this.notifyParent.emit('success');
            this.activeModal.close('creation completed');
            this.alertService.alert('success', `Company - ${this.companyForm.value.companyName} is created successfully.`);
        }
      })
    } else {
      this.companyService.update(this.company.id, company).subscribe(res => {
        if (res.code == 0) {
          this.notifyParent.emit('success');
            this.activeModal.close('update completed');
            this.alertService.alert('success', `Company - ${this.companyForm.value.companyName} is updated successfully.`);
        }
      })
    }

  }

  get f() { return this.companyForm.controls }

}
