import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GranaService } from '../../servicios/grana.service';

@Component({
  selector: 'app-pagina-404',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './pagina-404.component.html',
  styleUrl: './pagina-404.component.css',
})
export class Pagina404Component {
  constructor(private GranaService: GranaService) {}
  ngOnInit() {
    this.GranaService.detectKonamiCode().subscribe(() => {
      window.open(
        'https://www.youtube.com/watch?v=UNSuzoHduXk',
        '_blank',
        'width=600,height=400'
      );
    });
  }
}
