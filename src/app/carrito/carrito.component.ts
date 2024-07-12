
import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/ProductInterface';
import { CarritoService } from '../servicios/carrito.service';
@Component({
  standalone:true,
  selector: 'app-carrito', 
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    // Ejemplo para agregar productos al carrito
    this.carritoService.addToCart({ id: 1, name: 'Producto 1', price: 10, quantity: 1 });
    this.carritoService.addToCart({ id: 2, name: 'Producto 2', price: 20, quantity: 2 });
  }

  getCart(): Product[] {
    return this.carritoService.getCart();
  }

  removeFromCart(productId: number): void {
    this.carritoService.removeFromCart(productId);
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity > 0) {
      this.carritoService.updateQuantity(productId, quantity);
    }
  }

  checkout(): void {
    alert('Gracias por tu compra!');
    this.carritoService.clearCart();
  }
}
