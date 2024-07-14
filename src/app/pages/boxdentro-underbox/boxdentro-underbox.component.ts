import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-boxdentro-underbox',
  templateUrl: './boxdentro-underbox.component.html',
  styleUrls: ['./boxdentro-underbox.component.css'],
})
export class BoxdentroUNDERBOXComponent implements OnInit {
  constructor(private carritoService: CarritoService, private router: Router) {}

  box = {
    title: 'UNDER BOX',
    img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Under_Box.jpg?alt=media&token=exampletoken', // Actualizar con la imagen correcta
    price: 25,
    description: 'Una colección de juegos inspirados en la vida marina, seleccionados para divertir y educar sobre la importancia de la conservación marina.',
  };

  games = [
    {
      title: 'Subnautica',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2Fsubnautica.webp?alt=media&token=90522ffa-e0e4-45a8-a382-07f10380a8bb',
      rating: '96% positivo en Steam'
    },
    {
      title: 'Abzü',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FAbz%C3%BC.webp?alt=media&token=ab5c187e-a3fc-415f-b2fc-b99ccb59c0ad',
      rating: '96% positivo en Steam'
    },
    {
      title: 'BioShock',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FBioShock%20Bien.jpg?alt=media&token=3610f7f5-f782-4c68-a197-a415c1dff2a7',
      rating: '96% positivo en Steam'
    },
    {
      title: 'Dave the Diver',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FDave%20the%20diver.jpg?alt=media&token=e7cadbbb-0b73-4480-989e-aa25dc09f201',
      rating: '96% positivo en Steam'
    },
    {
      title: 'Another Crab\'s Treasure',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2Fanother-crabs-treasure-r-blogroll-1713906805542.jpg?alt=media&token=49e86106-3bcc-4b38-a5d7-39bc4c3fdd8f',
      rating: '96% positivo en Steam'
    },
    {
      title: 'Raft',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FRaft.webp?alt=media&token=68477532-41e2-4157-bf26-48050fcbb7b6',
      rating: '96% positivo en Steam'
    },
  ];

  displayedGames = this.games;
  countdown: string = '';
  countdownDate: number = new Date().getTime() + 5 * 24 * 60 * 60 * 1000;
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
