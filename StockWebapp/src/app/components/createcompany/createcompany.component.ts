import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createcompany',
  templateUrl: './createcompany.component.html',
  styleUrls: ['./createcompany.component.css'],
})
export class CreatecompanyComponent implements OnInit {
  public keywords: any = '';

  constructor() {}

  ngOnInit() {}

  save() {
    alert('save company');
  }

  keydown(e) {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      console.log('enter pressed.');
    }

    console.log(e.target.value);
  }
}
