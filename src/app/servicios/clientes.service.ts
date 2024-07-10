import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IArticulo } from '../interfaces/articuloInterface';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private _dataurl: string =
    'https://joybox-678b1-default-rtdb.europe-west1.firebasedatabase.app/box/articulo.json';

  // private clientes: Array<any> = [
  //   {nombre: 'Iberdrola', cif: 'A12345678', localidad: 'Bilbao'},
  //   {nombre: 'Jazztel', cif: 'A87654321', localidad: 'Madrid'},
  //   {nombre: 'La Caixa', cif: 'A4444444', localidad: 'Barcelona'},
  // ]

  constructor(private http: HttpClient) {}

getArticulos(): Observable <IArticulo[]> {
  return this.http.get<IArticulo[]>(this._dataurl);
}

//   getClientes(): Array<any> {
//     return this.clientes;
//   }

  setCliente(cliente: any): void {
    // this.clientes.push(cliente);
  }
}
