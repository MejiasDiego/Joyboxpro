import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-boxdentro-net',
  templateUrl: './boxdentro-net.component.html',
  styleUrls: ['./boxdentro-net.component.css'],
})
export class BoxDentroNETComponent implements OnInit {
  constructor(private carritoService: CarritoService, private router: Router) {}

  box = {
    title: 'NET BOX',
    img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/.NETBOX.jpg?alt=media&token=facb12a4-2c4e-40ca-af20-158fb89971f4', // Actualizar con la imagen correcta
    price: 25,
    description: 'Todo lo que necesitas para dominar el desarrollo en el ecosistema de Microsoft, desde fundamentos hasta técnicas avanzadas.',
  };

  books = [
    {
      title: 'Akka.NET Succinctly',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Libros%20Articulos%2FLibro5.png?alt=media&token=bd75e4f8-0a28-4943-9443-30559dc2ff42',
      rating: '3/5 Goodreads'
    },
    {
      title: 'Application Security in .NET Succinctly',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Libros%20Articulos%2FLibro4.png?alt=media&token=88012752-1ba2-44ba-893b-fc882c56c9e5',
      rating: '4/5 Goodreads'
    },
    {
      title: 'Entity Framework Notes for Professionals',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Libros%20Articulos%2FLibro3.png?alt=media&token=88c9e4da-cca7-4eba-a956-2541d5260449',
      rating: '4/5 Goodreads'
    },
    {
      title: '.NET for Visual FoxPro Developers',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Libros%20Articulos%2F.NET%20for%20Visual%20FoxPro%20Developers.jpg?alt=media&token=5697bcdc-060f-492f-a8a7-50207fd92754',
      rating: '5/5 Goodreads'
    },
    {
      title: 'Under the Hood of .NET Memory Management',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Libros%20Articulos%2FLibro2.png?alt=media&token=061ab12c-7162-43dc-950e-5e02118c3b93',
      rating: '4/5 Goodreads'
    },
    {
      title: '.NET Performance Testing and Optimization - The Complete Guide',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Libros%20Articulos%2FLibro1.png?alt=media&token=18505eae-87d7-491a-9ed0-05d3e660c15e',
      rating: '4/5 Goodreads'
    },
  ];

  displayedBooks = this.books;
  countdown: string = '';
  countdownDate: number = new Date().getTime() + 5 * 24 * 60 * 60 * 1000;
  customPrice: number = 0;

  ngOnInit() {
    this.startCountdown();
  }

  filterBooks(amount: number) {
    // Lógica para mostrar las cartas según el importe
    if (amount === 0) {
      this.displayedBooks = this.books;
    } else {
      this.displayedBooks = this.books.slice(0, amount); // Ejemplo: muestra solo los primeros 'amount' libros
    }
  }

  startCountdown() {
    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = this.countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;

      if (distance < 0) {
        clearInterval(countdownInterval);
        this.countdown = 'EXPIRED';
      }
    }, 1000);
  }

  updatePrice(amount: number) {
    this.customPrice = amount;
    this.filterBooks(amount);
  }

  onCustomPriceChange(event: any) {
    this.customPrice = event.target.value;
    this.filterBooks(this.customPrice);
  }

  addToCart(box: any) {
    this.carritoService.selectBox(box);
    this.router.navigate(['/carrito']);
  }
}
