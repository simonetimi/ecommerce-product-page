import { Injectable, signal } from '@angular/core';
import { Product, products } from './placeholder-data';

interface CartProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
  discount: number;
  thumbnail: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  itemsInCart = signal<CartProduct[]>([]);

  getProduct(id: string) {
    return products.find((product) => product.id === id) ?? null;
  }

  addProductToCart(product: Product, quantity: number) {
    // if items exists in cart, then change the quantity of the right item and save it
    if (this.itemsInCart().find((item) => item.id === product.id)) {
      const newCart = this.itemsInCart().map((item) => {
        if (item.id === product.id) {
          item.quantity += quantity;
        }
        return item;
      });
      this.itemsInCart.set(newCart);
    }
    // else, just add it
    const newItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      thumbnail: product.thumbnail,
      discount: product.discount,
      quantity,
    };
    this.itemsInCart.update((prevState) => [...prevState, newItem]);
  }
}
