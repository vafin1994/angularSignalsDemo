import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from './product/product-list/product-list';
import { CartView } from './cart/cart-view/cart-view';

@Component({
  imports: [RouterOutlet, ProductList, CartView],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Signals');
}
