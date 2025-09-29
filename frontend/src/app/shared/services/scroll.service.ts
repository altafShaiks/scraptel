import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollSubject = new BehaviorSubject<boolean>(false);
  isScrolled$ = this.scrollSubject.asObservable();

  constructor() {
    fromEvent(window, 'scroll')
    .pipe(map(() => window.scrollY > 10))
    .subscribe((scrolled) => this.scrollSubject.next(scrolled));
  }
}
