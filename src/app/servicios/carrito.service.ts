import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private selectedBoxSource = new BehaviorSubject<any>(null);
  selectedBox$ = this.selectedBoxSource.asObservable();

  selectBox(box: any) {
    this.selectedBoxSource.next(box);
  }

  clearCart() {
    this.selectedBoxSource.next(null);
  }
}
