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
      title: 'Building Applications with Spring 5 and Vue.js 2',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Libros%20Articulos%2FBuilding%20Applications%20with%20Spring%205%20and%20Vue.js%202.jpg?alt=media&token=5b40134b-e19e-4a5a-bc28-b59583438241',
      rating: '3/5 Goodreads'
    },
    {
      title: 'Software Architecture with Spring 5.0',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Libros%20Articulos%2FSoftware%20Architecture%20with%20Spring%205.0.jpg?alt=media&token=5c28924d-4bd4-4913-a961-668f9f7f5128',
      rating: '4/5 Goodreads'
    },
    {
      title: 'Spring Framework Cookbook: Hot Recipes for Spring Framework',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Libros%20Articulos%2Fspring%20hot%20recipes.png?alt=media&token=ef79ea6c-7d03-45b6-acec-5c4eba6bff66',
      rating: '4/5 Goodreads'
    },
    {
      title: 'Spring Framework Notes for Professionals',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Libros%20Articulos%2FSpring%20Framework%20Notes%20for%20Professionals.jpg?alt=media&token=64f96f91-bbbb-4b8b-9bec-5637110648f3',
      rating: '5/5 Goodreads'
    },
    {
      title: 'Spring Framework Reference Documentation',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Libros%20Articulos%2FSpring%20Framework%20Reference%20Documentation.jpg?alt=media&token=d852c9a8-1a19-492b-978d-82d411176c9c',
      rating: '4/5 Goodreads'
    },
    {
      title: 'Spring Boot Reference Guide',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Libros%20Articulos%2FSpring%20Boot%20Reference%20Guide.jpg?alt=media&token=7251aebb-40a6-4b7f-a8d8-7e343631b8f9',
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
