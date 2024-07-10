import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../servicios/clientes.service';
import { IArticulo } from '../../interfaces/articuloInterface';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styles: `
   p{
    color:red;
   }
  `
})
export class PortfolioComponent implements OnInit {

public listaArticulos: IArticulo[] = [];

constructor(private clientesService: ClientesService) {

}
  ngOnInit(): void {this.clientesService.getArticulos().subscribe((articulos) => {this.listaArticulos = articulos;});
    }
}
