import { Component, inject } from '@angular/core';
import { Cart } from '../cart';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [JsonPipe],
  selector: 'app-cart-view',
  styleUrl: './cart-view.css',
  templateUrl: './cart-view.html',
})
export class CartView {
  protected cart = inject(Cart);
}
