import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KonamiService {
  private konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  private keyBuffer: number[] = [];
  private konamiSubject = new Subject<void>();

  constructor() {
    document.addEventListener('keydown', this.handleKeydown.bind(this));
  }

  private handleKeydown(event: KeyboardEvent) {
    this.keyBuffer.push(event.keyCode);
    if (this.keyBuffer.length > this.konamiCode.length) {
      this.keyBuffer.shift();
    }
    if (this.keyBuffer.toString() === this.konamiCode.toString()) {
      this.konamiSubject.next();
      this.keyBuffer = [];
    }
  }

  detectKonamiCode() {
    return this.konamiSubject.asObservable();
  }
}
