import { computed, Service, signal } from '@angular/core';
import { CartItem } from './cart-item';
import { Product } from '../product/product';

@Service()
export class Cart {
  private itemsSignal = signal<CartItem[]>([]);
  public readonly items = this.itemsSignal.asReadonly();

  public numberOfPositions = computed<number>(() => this.itemsSignal().length);
  public totalQuantity = computed<number>(() =>
    this.itemsSignal().reduce((a, b) => a + b.quantity, 0),
  );
  public fullTotalPrice = computed<number>(() =>
    this.itemsSignal().reduce((a, b) => a + b.quantity * b.price, 0),
  );

  public addItem(newItem: Product) {
    const isItemExist: boolean = this.itemsSignal().some((item) => newItem.id === item.id);
    if (isItemExist) {
      this.addQuantityOfExistingItem(newItem);
    } else {
      this.itemsSignal.update((list) => {
        return [...list, { ...newItem, quantity: 1 }];
      });
    }
  }

  public removeItem(id: string) {
    this.itemsSignal.update((list) => list.filter((item) => item.id !== id));
  }

  private addQuantityOfExistingItem(newItem: Product) {
    this.itemsSignal.update((list) => {
      return list.map((item) => {
        if (item.id === newItem.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });
    });
  }
}
