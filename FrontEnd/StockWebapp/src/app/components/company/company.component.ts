import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompanyService } from 'src/app/services/company.service';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { StockExchangeService } from 'src/app/services/stock-exchange.service';
import { SectorService } from 'src/app/services/sector.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  q: string;
  page = 1;
  pageSize = 10;
  collectionSize: number;

  companies;

  constructor(
    private modalService: NgbModal,
    private companyService: CompanyService,
    private sectorService: SectorService,
    private alertService: AlertService
    // private seService: StockExchangeService
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.companyService.getList(this.q, this.page - 1, this.pageSize)
      .subscribe(res => {
        if (res.code == 0) {
          this.collectionSize = res.data.total;
          this.companies = res.data.list;
        }
      })
  }

  open(company) {
    this.sectorService.getList(0, 100).subscribe(res => {
      if (res.code == 0) {
        let sectorOptions: any[] = [];
        res.data.list.forEach(sector => sectorOptions.push({ id: sector.id, name: sector.name }))

        const modalRef = this.modalService.open(CompanyDetailsComponent);
        modalRef.componentInstance.company = company;
        modalRef.componentInstance.sectorOptions = sectorOptions;
        modalRef.componentInstance.notifyParent.subscribe(result => {
          if (result == 'success') this.getList()
        })
      }
    })
  }

  activate(company) {
    this.companyService.updateStatus(company.id, true).subscribe(res => {
      if (res.code == 0) {
        this.alertService.alert('success', `${company.companyName} is activated.`);
        this.getList();
      }
    })
  }

  deactivate(company) {
    this.companyService.updateStatus(company.id, false).subscribe(res => {
      if (res.code == 0) {
        this.alertService.alert('success', `${company.companyName} is deactivated.`);
        this.getList();
      }
    })
  }

}
