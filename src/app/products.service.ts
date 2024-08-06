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
    const cartItems = this.itemsInCart();
    const itemIndex = cartItems.findIndex((item) => item.id === product.id);

    if (itemIndex !== -1) {
      // Update quantity of existing item
      cartItems[itemIndex].quantity += quantity;
      this.itemsInCart.set(cartItems);
    } else {
      // Add new item to cart
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

  removeProductFromCart(productId: string) {
    this.itemsInCart.set(
      this.itemsInCart().filter((item) => item.id !== productId),
    );
  }
}
