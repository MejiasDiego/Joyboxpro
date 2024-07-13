import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private selectedBoxSubject = new BehaviorSubject<any>(null);
  selectedBox$ = this.selectedBoxSubject.asObservable();

  selectBox(box: any) {
    this.selectedBoxSubject.next(box);
  }

  clearCart() {
    this.selectedBoxSubject.next(null);
  }
}
