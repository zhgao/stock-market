import { Component, OnInit } from '@angular/core';
import { StockPriceService } from 'src/app/services/stock-price.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'stock-price',
  templateUrl: './stock-price.component.html',
  styleUrls: ['./stock-price.component.css']
})
export class StockPriceComponent implements OnInit {

  page = 1;
  pageSize = 10;
  collectionSize: number;

  stockPrices;

  summary;
  uploaded = false;

  constructor(
    private stockPriceService: StockPriceService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.stockPriceService.getList(this.page - 1, this.pageSize).subscribe(res => {
      if (res.code == 0) {
        this.collectionSize = res.data.total;
        this.stockPrices = res.data.list;
      }
    })
  }

  upload(element) {
    console.log(element.target.files[0])
    this.stockPriceService.upload(element.target.files[0]).subscribe(res => {
      console.log(res);
      if (res.code == 0) {
        this.summary = res.data;
        this.uploaded = true;
      } else {
        this.alertService.alert('error', res.message)
      }
    })
  }

  downloadTemplate(filename) {
    this.stockPriceService.downloadTemplate(filename).subscribe( (res) => {
      console.log(res)
      const blob = new Blob([res], {type: res.type});
      const objectUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        document.body.appendChild(link);
        link.setAttribute('style', 'display:none');
        link.setAttribute('href', objectUrl);
        link.setAttribute('download', filename);
        link.click();
        URL.revokeObjectURL(objectUrl);
    })
  }

}
