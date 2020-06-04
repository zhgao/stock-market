import { Component, OnInit } from '@angular/core';
import { IpoService } from 'src/app/services/ipo.service';

@Component({
  selector: 'ipo-future',
  templateUrl: './ipo-future.component.html',
  styleUrls: ['./ipo-future.component.css']
})
export class IpoFutureComponent implements OnInit {

  page = 1;
  pageSize = 10;
  collectionSize: number;

  ipos;

  constructor(private ipoService: IpoService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.ipoService.getFutureList(this.page - 1, this.pageSize)
      .subscribe(res => {
        if (res.code == 0) {
          this.collectionSize = res.data.total;
          this.ipos = res.data.list;
        }
      })
  }

}
