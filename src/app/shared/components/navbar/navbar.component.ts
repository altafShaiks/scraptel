import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() isScrolled = false;
  menuOpened: boolean = false;

  @HostBinding('class.scrolled') get scrolledClass() {
    return this.isScrolled;
  }

  openMenu() {
    this.menuOpened = true;
  }

  setScrolled(value: boolean) {
    this.isScrolled = value;
  }

}
