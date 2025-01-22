import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MyserviceService } from './myservice.service'; 

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, CommonModule],
  providers: [MyserviceService]
})
export class AppComponent {
  title = 'Angular Pipes Demo';
  text = 'angular pipes demonstration';
  today = new Date();
  price = 1999.99;
  decimalValue = 1234.56789;
  jsonObject = { submitted_by: "Eljan Pamintuan", section:"WD - 302", id_number:"20751660", age: 20,  city: "City of Angeles" };
  items = ['Angular', ' React', ' Vue', 'Svelte', 'Ember', 'Backbone'];

  todaydate: Date;
  componentproperty;
  constructor(private myservice: MyserviceService) {
    this.todaydate = this.myservice.showTodayDate();
    this.componentproperty = this.myservice.serviceproperty;
  }
}
