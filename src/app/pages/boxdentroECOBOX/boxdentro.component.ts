import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxdentro',
  templateUrl: './boxdentro.component.html',
  styleUrls: ['./boxdentro.component.css']
})
export class BoxDentroComponent implements OnInit {
  games = [
    {
      title: 'Stardew Valley',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FStardewValley.webp?alt=media&token=895a7559-e651-4662-a37d-b771532e46f4'
    },
    // Añade más juegos aquí
  ];

  displayedGames = this.games;
  countdown: string = '';
  countdownDate: number = new Date().getTime() + 5 * 24 * 60 * 60 * 1000;
  customPrice: number = 0;

  ngOnInit() {
    this.showBundle('complete');
    this.startCountdown();
  }

  showBundle(filter: string) {
    // Tu lógica para filtrar los juegos
  }

  toggleDescription(title: string) {
    // Tu lógica para mostrar/ocultar la descripción del juego
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
  }

  onCustomPriceChange(event: any) {
    this.customPrice = event.target.value;
  }
}
