import { Product } from '../product/product';

export interface CartItem extends Product {
  quantity: number,
}
