import { Injectable } from '@angular/core';
import { Product } from '../interfaces/ProductInterface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private cart: Product[] = [];

  constructor(private http: HttpClient) {}

  getCart(): Product[] {
    return this.cart;
  }

  addToCart(product: Product): void {
    const existingProduct = this.cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      this.cart.push(product);
    }
  }

  removeFromCart(productId: number): void {
    this.cart = this.cart.filter((product) => product.id !== productId);
  }

  updateQuantity(productId: number, quantity: number): void {
    const product = this.cart.find((item) => item.id === productId);
    if (product) {
      product.quantity = quantity;
    }
  }

  clearCart(): void {
    this.cart = [];
  }
}
