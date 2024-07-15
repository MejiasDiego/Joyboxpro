import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-boxdentro-neutralbox',
  templateUrl: './boxdentroneutralboxpro.component.html',
  styleUrls: ['./boxdentroneutralboxpro.component.css'],
})
export class BoxNeutralProComponent implements OnInit {
  constructor(private carritoService: CarritoService, private router: Router) {}

  box = {
    title: 'NEUTRAL BOX',
    img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Neutral_Box.jpg?alt=media&token=exampletoken', // Actualizar con la imagen correcta
    price: 25,
    description: 'Una colección de productos que ofrecen apoyo, recursos educativos y herramientas prácticas para fortalecer la comunidad LGBTQ+, abordando temas desde la identidad y la diversidad hasta los derechos y el activismo.',
  };

  games = [
    {
      title: 'Life is Strange 3: True Colours',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2Flife%20is%20strange%203.jpg?alt=media&token=bce17fc6-00d2-41d0-934a-b30c6aa1a652',
      rating: '70% positivo en Steam',
    },
    {
      title: 'Tell Me Why',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2Ftell%20me%20why.jpg?alt=media&token=14b8f7ea-1cd0-4681-8fa5-0ed91b9c10ef',
      rating: '90% positivo en Steam',
    },
    {
      title: 'Gone Home',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2Fgone%20home.jpg?alt=media&token=617f5169-768a-406b-9fd0-9e4166d33e50',
      rating: '77% positivo en Steam',
    },
    {
      title: 'Celeste',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2Fceleste.webp?alt=media&token=75789dba-24fb-4021-8d91-fd6a2cf2d69f',
      rating: '97% positivo en Steam',
    },
    {
      title: 'Undertale',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FUndertale.webp?alt=media&token=5055cd8d-ee7e-419d-9912-4b1688c812cc',
      rating: '96% positivo en Steam',
    },
    {
      title: 'The Outer Worlds',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2Fthe%20outer%20worlds.jpg?alt=media&token=c5cafb9d-a54d-4df4-87df-73d0135379e5',
      rating: '84% positivo en Steam',
    },
  ];

  displayedGames = this.games;
  countdown: string = '';
  countdownDate: number = new Date().getTime() + 4 * 24 * 60 * 60 * 1000;
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
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
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
