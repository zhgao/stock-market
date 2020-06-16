import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SectorService } from 'src/app/services/sector.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-sector-details',
  templateUrl: './sector-details.component.html',
  styleUrls: ['./sector-details.component.css']
})
export class SectorDetailsComponent implements OnInit {

  sectorForm: FormGroup;
  submitted = false;

  @Input() sector;

  @Output() notifyParent = new EventEmitter<string>();

  constructor(
    private activeModal: NgbActiveModal, 
    private fb: FormBuilder,
    private sectorService: SectorService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.sectorForm = this.fb.group({
      name: [this.sector == null ? '' : this.sector.name, Validators.required],
      brief: [this.sector == null ? '' : this.sector.brief, Validators.required]
    })
  }

  save() {
    this.submitted = true;

    if (this.sectorForm.invalid) return;

    if (this.sector === null) {
      this.sectorService.create(this.sectorForm.value)
        .subscribe(res => {
          if (res.code == 0) {
            this.notifyParent.emit('success');
            this.activeModal.close('creation completed');
            this.alertService.alert('success', `Sector - ${this.sectorForm.value.name} is created successfully.`);
          }
        })
    } else {
      this.sectorService.update(this.sector.id, this.sectorForm.value)
        .subscribe(res => {
          if (res.code == 0) {
            this.notifyParent.emit('success');
            this.activeModal.close('update completed');
            this.alertService.alert('success', `Sector - ${this.sectorForm.value.name} is updated successfully.`);
          }
        })
    }
  }

  get f() { return this.sectorForm.controls }

}
