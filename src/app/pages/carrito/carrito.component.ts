import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../servicios/carrito.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [FormsModule,CommonModule],
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  selectedBox: any;
  quantity: number = 1;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.carritoService.selectedBox$.subscribe(box => {
      this.selectedBox = box;
      this.quantity = 1; // Reset quantity to 1 when a new box is selected
    });
  }

  updateTotal() {
    // Method to update total if needed
  }

  clearCart() {
    this.carritoService.clearCart();
    this.selectedBox = null;
  }

  checkout() {
    // Implement checkout logic here
    alert('Checkout not implemented');
  }
}
