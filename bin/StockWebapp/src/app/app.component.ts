import { Component } from '@angular/core';
// data dual binding only works once import the formmodule.
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Stock Market Application';
}
