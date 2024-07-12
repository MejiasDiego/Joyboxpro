import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-boxdentroCHILLBOX',
  templateUrl: './boxdentro-chillbox.component.html',
  styleUrls: ['./boxdentro-chillbox.component.css'],
})
export class BoxDentroCHILLBOXComponent implements OnInit {
  games = [
    {
      title: 'Journey',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FJourney.webp?alt=media&token=97bf67a8-d71f-4fe4-b983-643d5c5f9836',
    },
    {
      title: 'A Short Hike',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FA%20shot%20Hike.webp?alt=media&token=207a8a69-8515-43ca-8ae9-471b96cec0eb',
    },
    {
      title: 'The Tourist',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FThe%20Tourist.webp?alt=media&token=56cae066-1eab-4466-a7ad-50047812375c',
    },
    {
      title: 'Unpacking',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FUnpacking.webp?alt=media&token=73baadb6-d5f5-4a71-accf-c22f9f2a2e29',
    },
    {
      title: 'Caffe Talk',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FCoffe%20Talk.webp?alt=media&token=982c0996-bf73-44c5-86cc-eff56e9155f1',
    },
    {
      title: 'Jusant',
      img: 'https://firebasestorage.googleapis.com/v0/b/joybox-678b1.appspot.com/o/Juegos%20Articulos%2FJusant.webp?alt=media&token=5d2b518d-87e1-41ef-9dec-c2fcdb65f1ff',
    },
  ];

  displayedGames = this.games;
  countdown: string = '';
  countdownDate: number = new Date().getTime() + 5 * 24 * 60 * 60 * 1000;
  customPrice: number = 0;

  ngOnInit() {
    this.startCountdown();
  }


  showBundle(filter: string) {
    // Tu lógica para filtrar los juegos
  }

  toggleDescription(title: string) {
    // Tu lógica para mostrar/ocultar la descripción del juego
  }
  filterCards(category: string) {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      const cardCategory = card.getAttribute('data-category');
      if (category === 'all' || category === category) {
        (card as HTMLElement).style.display = 'block';
      } else {
        (card as HTMLElement).style.display = 'none';
      }
    });
    //que busque el Indice y asignarlo al botón, en vez de un forEach, hacer un for.
    const buttons = document.querySelectorAll('.filter-buttons .btn');
    buttons.forEach((button) => {
      if (
        button.textContent?.toLowerCase() === category ||
        (category === 'all' &&
          button.textContent?.toLowerCase() === 'todos los 4,61')
      ) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
>>>>>>> 6f463d5a753e51606e40568aeb4527ce1073a060
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
    this.filterCards(amount);
  }

  onCustomPriceChange(event: any) {
    this.customPrice = event.target.value;
    this.filterCards(this.customPrice);
  }
}
