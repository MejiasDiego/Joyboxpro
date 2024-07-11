import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  
  ngOnInit(): void {
    this.updateCountdowns();
    setInterval(() => this.updateCountdowns(), 1000);
  }

  updateCountdowns() {
    const countdownElements = document.querySelectorAll('.countdown');
    countdownElements.forEach((countdown) => {
      const endTime = new Date(countdown.getAttribute('data-end-time')!).getTime();
      const now = new Date().getTime();
      const distance = endTime - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const timeRemaining = countdown.querySelector('.time-remaining');
      if (timeRemaining) {
        if (distance < 0) {
          timeRemaining.textContent = 'EXPIRED';
        } else {
          timeRemaining.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
      }
    });
  }

  filterBoxes(category: string) {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
      const boxCategory = box.getAttribute('data-category');
      if (category === 'all' || boxCategory === category) {
        (box as HTMLElement).style.display = 'block';
      } else {
        (box as HTMLElement).style.display = 'none';
      }
    });

    const buttons = document.querySelectorAll('.filter-buttons .btn');
    buttons.forEach((button) => {
      if (
        button.textContent?.toLowerCase() === category ||
        (category === 'all' && button.textContent?.toLowerCase() === 'todos los boxes')
      ) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }
}
