import { Component, OnInit, Input } from '@angular/core';
import { Ipo } from 'src/app/modules/Ipo';

@Component({
  selector: 'app-ipoitem',
  templateUrl: './ipoitem.component.html',
  styleUrls: ['./ipoitem.component.css'],
})
export class IpoitemComponent implements OnInit {
  @Input() ipo: Ipo;

  constructor() {}

  ngOnInit() {}
}
