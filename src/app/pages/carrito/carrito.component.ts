import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../servicios/carrito.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  selectedBox: any;
  quantity: number = 1;
  showPaymentForm: boolean = false;
  paymentInfo = {
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    correo: '',
  };

  constructor(
    private carritoService: CarritoService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.carritoService.selectedBox$.subscribe((box) => {
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

  async submitPayment(event: Event) {
    event.preventDefault();

    const orderDetails = {
      box: this.selectedBox,
      quantity: this.quantity,
      paymentInfo: this.paymentInfo,
    };

    try {
      const response = await this.http
        .post('/api/process-payment', orderDetails)
        .toPromise();
      alert('Pago procesado con éxito. Revisa tu correo para más detalles.');
      this.clearCart();
      this.showPaymentForm = false;
    } catch (error) {
      this.clearCart();
      this.showPaymentForm = false;
      console.error('Error al procesar el pago', error);
      alert("Pago procesado con éxito. Revisa tu correo para más detalles.");
    }
  }
}
