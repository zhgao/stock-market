import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from '../components/alert/alert.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private modalService: NgbModal) { }

  alert(type: string, message: string) {
    const modalRef = this.modalService.open(AlertComponent);
    modalRef.componentInstance.type = type;
    modalRef.componentInstance.message = message;
  }
}
