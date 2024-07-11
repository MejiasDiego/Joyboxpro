import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxdentro',
  templateUrl: './boxdentro.component.html',
  styleUrls: ['./boxdentro.component.css'],
})
export class BoxDentroComponent implements OnInit {
  games = [
    {
      title: 'Stardew Valley',
      price: 10,
      description:
        'Descripción detallada de Stardew Valley. Un juego de gestión de trenes...',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FStardewValley.webp?alt=media&token=895a7559-e651-4662-a37d-b771532e46f4',
    },
    {
      title: 'Expeditions: Rome',
      price: 20,
      description:
        'Descripción detallada de Expeditions: Rome. Un juego de estrategia...',
      img: 'ImgGame/celeste.webp',
    },
    {
      title: 'Showgunners',
      price: 30,
      description:
        'Descripción detallada de Showgunners. Un juego de combate táctico...',
      img: 'ImgGame/Fall Guys.webp',
    },
    {
      title: 'Gears Tactics',
      price: 25,
      description:
        'Descripción detallada de Gears Tactics. Un juego de estrategia táctica...',
      img: 'ImgGame/Gears Tactics.webp',
    },
    {
      title: 'Age of Wonders: Planetfall',
      price: 15,
      description:
        'Descripción detallada de Age of Wonders: Planetfall. Un juego de estrategia por turnos...',
      img: 'ImgGame/Age of Wonders Planetfall.webp',
    },
    {
      title: 'XCOM 2',
      price: 5,
      description:
        'Descripción detallada de XCOM 2. Un juego de estrategia y tácticas por turnos...',
      img: 'ImgGame',
    },
  ];

  displayedGames = this.games;

  countdown: string = '';
  countdownDate: number = new Date().getTime() + 5 * 24 * 60 * 60 * 1000;

  ngOnInit() {
    this.showBundle('complete');
    this.startCountdown();
  }

  showBundle(filter: string) {
    if (filter === 'complete') {
      this.displayedGames = this.games;
    } else if (filter === 'three') {
      this.displayedGames = this.games.slice(0, 3);
    } else if (filter === 'basic') {
      this.displayedGames = [
        this.games.reduce((prev, curr) =>
          prev.price < curr.price ? prev : curr
        ),
      ];
    } else {
      const priceLimit = parseInt(filter);
      this.displayedGames = this.games.filter(
        (game) => game.price <= priceLimit
      );
      if (filter === '6') {
        this.displayedGames = this.displayedGames
          .sort((a, b) => a.price - b.price)
          .slice(0, 3);
      }
    }
  }

  toggleDescription(title: string) {
    const description = document.getElementById(`desc-${title}`);
    if (description) {
      if (description.style.display === 'none' || !description.style.display) {
        description.style.display = 'block';
      } else {
        description.style.display = 'none';
      }
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
}
