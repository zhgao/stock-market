import { Component, OnInit } from '@angular/core';
import { CompanyIpo } from 'src/app/models/CompanyIpo';
import { debounceTime, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IpoService } from 'src/app/services/ipo.service';
import { StockPriceService } from 'src/app/services/stock-price.service';
import { EChartOption } from 'echarts';
import * as moment from 'moment';

@Component({
  selector: 'compare-company',
  templateUrl: './compare-company.component.html',
  styleUrls: ['./compare-company.component.css']
})
export class CompareCompanyComponent implements OnInit {

  company: CompanyIpo;
  fromDate;
  toDate;
  companyOptions: CompanyIpo[] = [];
  selectedCompanies: CompanyIpo[] = []

  messages = []

  chartOption: EChartOption;

  constructor(
    private stockPriceService: StockPriceService,
    private ipoService: IpoService
  ) { }

  ngOnInit() {
    this.loadCompanies();
  }

  generateCharts() {
    let companies = [];
    this.selectedCompanies.forEach(item => companies.push({ companyCode: item.companyCode, stockExchangeName: item.stockExchangeName }));
    let body = { list: companies, dateFrom: this.fromDate, toDate: this.toDate }
    console.log(body);
    this.stockPriceService.generateChartsForCompanies(body).subscribe(res => {
      if (res.code == 0) {
        console.log(res.data)
        let chart = { legends: { data: [] }, xAxis: { data: [] }, series: [] }
        res.data.forEach(item => {

          if (item.list.length < 1) {
            this.messages.push(`${item.companyName} | ${item.stockExchange} : ${item.companyCode}`)
          } else {
            const companyName = item.companyName;
            chart.legends.data.push(companyName);

            let currentPrices = [];
            item.list.forEach(item => {
              currentPrices.push(item.currentPrice);
              
              const timestamp = moment(item.stockTimestamp).format("HH:mm");
              if (!chart.xAxis.data.includes(timestamp)) chart.xAxis.data.push(timestamp);
            })

            let s = { name: companyName, type: 'line', data: currentPrices };
            chart.series.push(s);
          }
        })

        console.log(chart);

        this.loadCharts(chart);
      }
    })
  }

  loadCharts(chart) {
    this.chartOption = {
      title: {
        text: 'Charts'
      },
      legend: {
        data: chart.legends.data
      },
      xAxis: {
        type: 'category',
        data: chart.xAxis.data
      }, yAxis: {
        type: 'value'
      }, series: chart.series
    }
  }

  loadCompanies() {
    this.ipoService.getList(0, 999).subscribe(res => {
      if (res.code == 0) {
        res.data.list.forEach(element => {
          let companyIpo = new CompanyIpo();
          companyIpo.companyCode = element.companyCode;
          companyIpo.companyName = element.companyName;
          companyIpo.stockExchangeName = element.stockExchangeName;
          this.companyOptions.push(companyIpo);
        });
      }
    })
  }

  removeCompany(companyCode) {
    let index: number = this.selectedCompanies.map(function (item) { return item.companyCode })
      .indexOf(companyCode);

    this.selectedCompanies.splice(index, 1);
  }

  addCompany() {
    if (this.company instanceof CompanyIpo) this.selectedCompanies.push(this.company);
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term => term === '' ? []
        : this.companyOptions.filter(v => v.companyName.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  formatter = (x: { companyName: string }) => x.companyName;

}
