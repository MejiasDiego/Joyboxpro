import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { bufferCount, filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GranaService {
  private konamiCode: string[] = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
  ];

  constructor() {}

  public detectKonamiCode() {
    return fromEvent<KeyboardEvent>(document, 'keydown').pipe(
      map(event => event.code),
      bufferCount(10, 1),
      filter(keys => keys.join() === this.konamiCode.join())
    );
  }
}
