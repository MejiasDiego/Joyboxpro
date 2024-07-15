import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-boxdentrojava',
  templateUrl: './boxdentro-javabox.component.html',
  styleUrls: ['./boxdentro-javabox.component.css'],
})
export class BoxDentroJAVABOXComponent implements OnInit {
  constructor(private carritoService: CarritoService, private router: Router) {}

  box = {
    title: 'JAVA BOX',
    img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/JAVABOX.jpg?alt=media&token=34140d55-e10c-4264-896b-6940bef13f1a', // Actualizar con la imagen correcta
    price: 25,
    description:
      'En este box podrás aprender todo sobre Java y aprenderás a programar.',
  };

  books = [
    {
      title: '3D Programming in Java',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Libros%20Articulos%2F3D%20Programming%20in%20Java.jpg?alt=media&token=d1ec6d8c-abae-4d99-8557-3df5f347b10d',
      rating: '4/5 Goodreads'
    },
    {
      title: 'A Practical Introduction to Data Structures',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Libros%20Articulos%2FA%20Practical%20Introduction%20to%20Data%20Structures%20and%20Algorithm%20Analysis%20Third%20Edition.jpg?alt=media&token=7be6243a-6a8c-4db5-9303-242c62bdaa75',
      rating: '5/5 Goodreads'
    },
    {
      title: 'An Introduction to the USA Computing Olympiad',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Libros%20Articulos%2FAn%20Introduction%20to%20the%20USA%20Computing%20Olympiad%2C%20Java%20Edition.webp?alt=media&token=286c8a84-1442-487f-a0fb-dc6d1c0bed64',
      rating: '4/5 Goodreads'
    },
    {
      title: 'Apache Jakarta Commons: Reusable Java Components',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Libros%20Articulos%2FApache%20Jakarta.png?alt=media&token=7146ad32-8e60-45e5-a77d-7e94de12c722',
      rating: '4/5 Goodreads'
    },
    {
      title: 'Artificial Intelligence-Foundations of Computational Agents, Second Edition',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Libros%20Articulos%2FArtificial%20Intelligence-Foundations%20of%20Computational%20Agents%2C%20Second%20Edition.jpg?alt=media&token=8eec332a-d1e0-445c-a6b0-e89732a5a5c4',
      rating: '4/5 Goodreads'
    },
    {
      title: 'Building Back-End Web Apps with Java, JPA and JSF',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Libros%20Articulos%2FBuilding%20Back-End%20Web%20Apps%20with%20Java%2C%20JPA%20and%20JSF.png?alt=media&token=98cb4f61-4f0d-4f82-b37b-31b2d6c845d6',
      rating: '4/5 Goodreads'
    },
  ];

  displayedBooks = this.books;
  countdown: string = '';
  countdownDate: number = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
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
