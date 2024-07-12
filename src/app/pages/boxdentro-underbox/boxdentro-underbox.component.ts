import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-boxdentro-underbox',
  templateUrl: './boxdentro-underbox.component.html',
  styleUrls: ['./boxdentro-underbox.component.css'],
})
export class BoxdentroUNDERBOXComponent implements OnInit {
  games = [
    {
      title: 'Subnautica',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FPapers%20Please.webp?alt=media&token=01de4dc6-df16-4f55-85a0-5f587b62ea63',
      rating: '96% positivo en Steam'
    },
    {
      title: 'Abzü',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FThis%20War%20of%20Mine.webp?alt=media&token=9474d95c-4af8-4d1e-a619-144a562fcd9f',
      rating: '96% positivo en Steam'
    },
    {
      title: 'BioShock',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FDetroid%20Become%20Human.webp?alt=media&token=43e1684f-21dd-4350-ac6e-f87c1c8c56a4',
      rating: '96% positivo en Steam'
    },
    {
      title: 'Dave the Diver',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FUnpacking.webp?alt=media&token=73baadb6-d5f5-4a71-accf-c22f9f2a2e29',
      rating: '96% positivo en Steam'
    },
    {
      title: 'Another Crab\'s Treasure',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FCoffe%20Talk.webp?alt=media&token=982c0996-bf73-44c5-86cc-eff56e9155f1',
      rating: '96% positivo en Steam'
    },
    {
      title: 'Raft',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FJusant.webp?alt=media&token=5d2b518d-87e1-41ef-9dec-c2fcdb65f1ff',
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
}
