import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeService } from './employee.service';
import { ProductsService } from './products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [EmployeeService, ProductsService]
})
export class AppComponent {
  title = 'services-demo';

 public employees: {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
 }[] = [];

 public products: {
  id: string;
  name: string;
  price: number;
  description: string;
 }[] = []

 constructor(
  private _employeeService: EmployeeService,
  private _productsService: ProductsService){}

 ngOnInit() {
   this.employees = this._employeeService.getEmployees();
   this.products = this._productsService.getProducts();
 }

}
