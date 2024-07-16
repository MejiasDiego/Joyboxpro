import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KonamiService } from '../../servicios/konamiservice';

@Component({
  selector: 'app-pagina-404',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './pagina-404.component.html',
  styleUrls: ['./pagina-404.component.css'],
})
export class Pagina404Component implements OnInit {
  constructor(private konamiService: KonamiService) {}

  ngOnInit() {
    this.konamiService.detectKonamiCode().subscribe(() => {
      window.open(
        'https://www.youtube.com/watch?v=UNSuzoHduXk',
        '_blank',
        'width=600,height=400'
      );
    });
  }
}
