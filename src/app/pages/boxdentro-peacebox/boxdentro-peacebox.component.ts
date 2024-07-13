import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-boxdentro-peacebox',
  templateUrl: './boxdentro-peacebox.component.html',
  styleUrls: ['./boxdentro-peacebox.component.css'],
})
export class BoxdentroPEACEBOXComponent implements OnInit {
  constructor(private carritoService: CarritoService, private router: Router) {}

  box = {
    title: 'PEACE BOX',
    img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Peace_Box.jpg?alt=media&token=c12dd655-aeb3-4e6f-8544-844eefa02c7c', // Actualizar con la imagen correcta
    price: 25,
    description: 'Una selección de productos que inspiran la reconciliación, la armonía y la resolución de conflictos, ofreciendo recursos para promover el diálogo constructivo, la comprensión cultural y la cooperación global hacia un mundo más pacífico y sostenible.',
  };

  games = [
    {
      title: 'Reigns',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FReigns.webp?alt=media&token=ca3ad4a7-f81b-4d37-a3b0-13cedd12e663',
      rating: '87% positivo en Steam'
    },
    {
      title: 'Minecraft',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FMinecraft.webp?alt=media&token=a1186f44-fa73-4ca1-9319-19a4985764fa',
      rating: '99% positivo en Steam'
    },
    {
      title: 'Phoenix Wright: Ace Attorney',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FPhoenix%20Wright.webp?alt=media&token=fecd9902-a320-4d02-9e6b-ac6d695fe406',
      rating: '97% positivo en Steam'
    },
    {
      title: 'Pentiment',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FPentiment.webp?alt=media&token=435d5087-0e42-4d73-99bc-645a0da27f2f',
      rating: '95% positivo en Steam'
    },
    {
      title: 'Disco Elysium',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FDisco%20Elysium.webp?alt=media&token=00f543d9-0608-4315-b3c4-45e972c37331',
      rating: '93% positivo en Steam'
    },
    {
      title: 'Never Alone',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FNever%20Alone.webp?alt=media&token=973c6315-8b82-41bb-887a-e982a6008301',
      rating: '81% positivo en Steam'
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
    // Lógica para mostrar las cartas según el importe
    if (amount === 0) {
      this.displayedGames = this.games;
    } else {
      this.displayedGames = this.games.slice(0, amount); // Ejemplo: muestra solo los primeros 'amount' juegos
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
