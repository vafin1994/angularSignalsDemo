import { Component, input, output } from '@angular/core';
import { Product } from '../product';

@Component({
  imports: [],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  public product = input.required<Product>();
  public addProduct = output<Product>();
}
