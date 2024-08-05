import { Injectable, signal } from '@angular/core';
import { products } from './placeholder-data';

interface CartProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private itemsInCart = signal<CartProduct[] | null>(null);

  getProduct(id: string) {
    return products.find((product) => product.id === id) ?? null;
  }

  getProductsInCart() {
    return this.itemsInCart();
  }

  addProduct(id: string, quantity: number) {
    // if preset
  }
}
