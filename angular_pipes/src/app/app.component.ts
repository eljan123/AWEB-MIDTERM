import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Pipes Demo';
  text = 'angular pipes demonstration';
  today = new Date();
  price = 1999.99;
  decimalValue = 1234.56789;
  jsonObject = { submitted_by: "Eljan Pamintuan", section:"WD - 302", id_number:"20751660", age: 20,  city: "City of Angeles" };
  items = ['Angular', ' React', ' Vue', 'Svelte', 'Ember', 'Backbone'];
}