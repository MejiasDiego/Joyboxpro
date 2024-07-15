import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-boxdentro-springbox',
  templateUrl: './boxdentro-springbox.component.html',
  styleUrls: ['./boxdentro-springbox.component.css'],
})
export class BoxdentroSPRINGBOXComponent implements OnInit {
  constructor(private carritoService: CarritoService, private router: Router) {}

  box = {
    title: 'SPRING BOX',
    img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/SPRINGBOX.jpg?alt=media&token=0c156ba8-fbf0-47fb-bdc4-793982008bbf', // Actualizar con la imagen correcta
    price: 25,
    description: 'Recursos esenciales que cubren desde los conceptos fundamentales hasta técnicas avanzadas de desarrollo, proporcionando guías prácticas, ejemplos detallados y estrategias efectivas para dominar Spring.',
  };

  games = [
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
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Libros%20Articulos%2Fspring%20hot%20recipes.png?alt=media&token=df88b999-4714-43c2-b10f-980310b876e6',
      rating: '4/5 Goodreads'
    },
    {
      title: 'Spring Framework Notes for Professionals',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FUnpacking.webp?alt=media&token=73baadb6-d5f5-4a71-accf-c22f9f2a2e29',
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

  displayedGames = this.games;
  countdown: string = '';
  countdownDate: number = new Date().getTime() + 8 * 24 * 60 * 60 * 1000;
  customPrice: number = 0;

  ngOnInit() {
    this.startCountdown();
  }

  filterGames(amount: number) {
    if (amount === 0) {
      this.displayedGames = this.games;
    } else {
      this.displayedGames = this.games.slice(0, amount);
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
    this.filterGames(amount);
  }

  onCustomPriceChange(event: any) {
    this.customPrice = event.target.value;
    this.filterGames(this.customPrice);
  }

  addToCart(box: any) {
    this.carritoService.selectBox(box);
    this.router.navigate(['/carrito']);
  }
}
