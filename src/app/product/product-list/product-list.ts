import { Component, inject, signal } from '@angular/core';
import { Product } from '../product';
import { Cart } from '../../cart/cart';
import { ProductCard } from '../product-card/product-card';

@Component({
  imports: [ProductCard],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  protected cart = inject(Cart);

  protected products = signal<Product[]>([
    { id: 'p1', name: 'Keyboard', price: 2490 },
    { id: 'p2', name: 'Mouse', price: 1290 },
    { id: 'p3', name: 'Monitor 27"', price: 8990 },
    { id: 'p4', name: 'Headphones', price: 3490 },
    { id: 'p5', name: 'USB-C Hub', price: 1790 },
  ]);
}
