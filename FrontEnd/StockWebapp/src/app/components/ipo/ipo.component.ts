import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { NgbModal, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { StockExchangeService } from 'src/app/services/stock-exchange.service';
import { AlertService } from 'src/app/services/alert.service';
import { IpoService } from 'src/app/services/ipo.service';
import { IpoDetailsComponent } from './ipo-details/ipo-details.component';

@Component({
  selector: 'ipo',
  templateUrl: './ipo.component.html',
  styleUrls: ['./ipo.component.css']
})
export class IpoComponent implements OnInit {

  page = 1;
  pageSize = 10;
  collectionSize: number;

  ipos;

  constructor(
    private modalService: NgbModal,
    private ipoService: IpoService,
    private companyService: CompanyService,
    private stockExchangeService: StockExchangeService
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.ipoService.getList(this.page - 1, this.pageSize)
      .subscribe(res => {
        if (res.code == 0) {
          this.collectionSize = res.data.total;
          this.ipos = res.data.list;
        }
      })
  }

  open(ipo) {
    this.companyService.getList(null, 0, 100).subscribe(res => {
      if (res.code == 0) {
        let companyOptions: any[] = [];
        res.data.list.forEach(element => companyOptions.push({id: element.id, name: element.companyName}));

        this.stockExchangeService.getList(0, 100).subscribe(res => {
          if (res.code == 0) {
            let stockExchangeOptions: any[] = [];
            res.data.list.forEach(element => stockExchangeOptions.push({id: element.id, name: element.stockExchange}));
          
            const modalRef = this.modalService.open(IpoDetailsComponent);
            modalRef.componentInstance.ipoDetails = ipo;
            modalRef.componentInstance.companyOptions = companyOptions;
            modalRef.componentInstance.stockExchangeOptions = stockExchangeOptions;
            modalRef.componentInstance.notifyParent.subscribe(result => {
              if (result == 'success') this.getList()
            })
          }
        })
      }
    })
  }

}
