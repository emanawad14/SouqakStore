import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cart = [
    {
      name: 'LCD Monitor',
      price: 650,
      quantity: 1,
      image: 'https://via.placeholder.com/50x50'
    },
    {
      name: 'HI Gamepad',
      price: 550,
      quantity: 2,
      image: 'https://via.placeholder.com/50x50'
    }
  ];

  total = 0;

  ngOnInit(): void {
    this.updateTotal();
  }

  updateTotal() {
    this.total = this.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

}
