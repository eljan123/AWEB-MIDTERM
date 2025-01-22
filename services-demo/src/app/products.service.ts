import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  getProducts(){
    return [
      {
        id: 'P-101',
        name: 'Logitech Mouse',
        price: 899,
        description: '6 Button Mechanical Mouse',
      },
      {
        id: 'P-102',
        name: 'JBL BT Speaker',
        price: 1099,
        description: 'Waterproof Radio 360 Surround',
      },
      {
        id: 'P-103',
        name: 'Mechanical Keyboard',
        price: 2395,
        description: 'Hot-Swappable RGB Backlit',
      },
      {
        id: 'P-104',
        name: 'Oculus Meta',
        price: 22450,
        description: 'All-in-one Gaming Headset',
      },
    ];
  }
}
