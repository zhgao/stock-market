import { Component, OnInit } from '@angular/core';
import { SectorService } from 'src/app/services/sector.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SectorDetailsComponent } from './sector-details/sector-details.component';

@Component({
  selector: 'sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {

  page = 1;
  pageSize = 10;
  collectionSize: number;

  sectors;

  constructor(
    private modalService: NgbModal,
    private sectorService: SectorService
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    console.log(`getList: page=${this.page}; pageSize=${this.pageSize}`);
    this.sectorService.getList(this.page - 1, this.pageSize)
      .subscribe(res => {
        if (res.code == 0) {
          this.collectionSize = res.data.total;
          this.sectors = res.data.list;
        }
      })
  }

  open(sector) {
    const modalRef = this.modalService.open(SectorDetailsComponent);
    modalRef.componentInstance.sector = sector;

    modalRef.componentInstance.notifyParent.subscribe(result => {
      if (result == 'success') this.getList()}
    );
    
  }

}
