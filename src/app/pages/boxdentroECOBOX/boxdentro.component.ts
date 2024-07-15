import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-boxdentro',
  templateUrl: './boxdentro.component.html',
  styleUrls: ['./boxdentro.component.css']
})
export class BoxDentroComponent implements OnInit {
  constructor(private carritoService: CarritoService, private router: Router) {}

  box = {
    title: 'ECO BOX',
    img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Eco_Box.jpg?alt=media&token=4b1037e4-9a04-4316-9787-c64ee392749b',
    price: 25,
    description: 'Explorar y salva la naturaleza a través de aventuras submarinas y creando tu granja.',
  };

  games = [
    {
      title: 'Stardew Valley',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FStardewValley.webp?alt=media&token=895a7559-e651-4662-a37d-b771532e46f4',
      rating: '96% positivo en Steam',
    },
    {
      title: 'Firewatch',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2Ffirewatch.jpg?alt=media&token=0cffd4b1-eed0-4679-add0-a80ebcc8b4b1',
      rating: '93% positivo en Steam',
    },
    {
      title: 'Farming Simulator',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FfarmingSimulator.webp?alt=media&token=ae42ef33-93fc-4886-bc78-c9ae485869a3',
      rating: '80% positivo en Steam',
    },
    {
      title: 'Unravel',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FUnravel.webp?alt=media&token=41a231f6-33a1-4012-a055-64bcf0866e35',
      rating: '91% positivo en Steam',
    },
    {
      title: 'The Forest',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FThe_Forest_game.webp?alt=media&token=db9ca9eb-e6a0-4846-9b47-4f905ad84f9c',
      rating: '82% positivo en Steam',
    },
    {
      title: 'Maneater',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FManeater.webp?alt=media&token=4e6673a6-6867-4ae1-a3b4-c796d92b6b86',
      rating: '78% positivo en Steam',
    },
  ];

  displayedGames = this.games;
  countdown: string = '';
  countdownDate: number = new Date().getTime() + 1 * 24 * 60 * 60 * 1000;
  customPrice: number = 0;

  ngOnInit() {
    this.startCountdown();
  }

  filterGames(amount: number) {
    const gameList = document.getElementById('game-list');
    if (gameList) {
      const cards = gameList.getElementsByClassName('game-card');
      Array.from(cards).forEach((card: Element) => {
        card.classList.add('fade-out');
      });

      setTimeout(() => {
        if (amount === 0) {
          this.displayedGames = this.games;
        } else {
          this.displayedGames = this.games.slice(0, amount);
        }

        setTimeout(() => {
          const newCards = gameList.getElementsByClassName('game-card');
          Array.from(newCards).forEach((card: Element) => {
            card.classList.remove('fade-out');
            card.classList.add('fade-in');
          });
        }, 50); // Small delay to trigger the fade-in animation
      }, 500); // Duration of the fade-out animation
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
