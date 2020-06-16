import { Component, OnInit } from '@angular/core';
import { StockExchangeService } from 'src/app/services/stock-exchange.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StockExchangeDetailsComponent } from './stock-exchange-details/stock-exchange-details.component';
import { StockExchange } from 'src/app/models/StockExchange';

@Component({
  selector: 'stock-exchange',
  templateUrl: './stock-exchange.component.html',
  styleUrls: ['./stock-exchange.component.css']
})
export class StockExchangeComponent implements OnInit {

  page = 1;
  pageSize = 10;
  collectionSize: number;

  stockExchanges;

  constructor(
    private modalService: NgbModal,
    private seService: StockExchangeService
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.seService.getList(this.page - 1, this.pageSize)
      .subscribe(res => {
        if (res.code == 0) {
          // this.collectionSize = 30;
          this.collectionSize = res.data.total;
          this.stockExchanges = res.data.list;
        }
      })
  }

  open(stockExchange) {
    console.log(stockExchange);
    const modalRef = this.modalService.open(StockExchangeDetailsComponent);
    modalRef.componentInstance.stockExchange = stockExchange as StockExchange;

    modalRef.componentInstance.notifyParent.subscribe(result => {
      if (result == 'success') this.getList()}
    );
    
  }

}
