import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-boxdentroMIRRORBOX',
  templateUrl: './boxdentro-mirrorbox.component.html',
  styleUrls: ['./boxdentro-mirrorbox.component.css'],
})
export class BoxDentroMIRRORBOXComponent implements OnInit {
  constructor(private carritoService: CarritoService, private router: Router) {}

  box = {
    title: 'MIRROR BOX',
    img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Mirror_Box.jpg?alt=media&token=18df8d46-443c-4ffd-bcd3-3d683cc97e7b', // Actualizar con la imagen correcta
    price: 25,
    description: 'Saber nuestro pasado para evitar cometer los mismos errores en el futuro. Este pack busca reflejar las injusticias que hay en el mundo y mostrar los horrores de la guerra.',
  };

  games = [
    {
      title: 'Papers, Please',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FPapers%20Please.webp?alt=media&token=cf0599e8-574e-4555-ab1f-64566d9ff701',
      rating: '97% positivo en Steam'
    },
    {
      title: 'This War of Mine',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FThis%20War%20of%20Mine.webp?alt=media&token=9474d95c-4af8-4d1e-a619-144a562fcd9f',
      rating: '94% positivo en Steam'
    },
    {
      title: 'Detroid: Become Human',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FDetroid%20Become%20Human.webp?alt=media&token=43e1684f-21dd-4350-ac6e-f87c1c8c56a4',
      rating: '95% positivo en Steam'
    },
    {
      title: 'My Child Lebensborn',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FMy%20Child%20Lebensborn.webp?alt=media&token=fcbc59d7-74ef-412d-a177-0d284b3f87ed',
      rating: '96% positivo en Steam'
    },
    {
      title: 'Bury Me, My Love',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FBury%20Me%2C%20My%20Love.webp?alt=media&token=d5bd8cb5-3a87-4e0b-bc58-1758915d626a',
      rating: '70% positivo en Steam'
    },
    {
      title: 'Valiant Hearts: The Great War',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FValiant%20Hearts.webp?alt=media&token=16693996-2e23-4986-aef8-9aa850e254cc',
      rating: '95% positivo en Steam'
    },
  ];

  displayedGames = this.games;
  countdown: string = '';
  countdownDate: number = new Date().getTime() + 6 * 24 * 60 * 60 * 1000;
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
