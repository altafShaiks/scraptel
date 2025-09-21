import { Component, HostBinding, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() isScrolled = false;
  @Output() menuToggled = new EventEmitter<boolean>();

  @HostBinding('class.scrolled') get scrolledClass() {
    return this.isScrolled;
  }

  menuOpened: boolean = false;

  openMenu() {
    this.menuOpened = true;
    this.menuToggled.emit(this.menuOpened);
  }

  closeMenu() {
    this.menuOpened = false;
    this.menuToggled.emit(this.menuOpened);
  }

  setScrolled(value: boolean) {
    this.isScrolled = value;
  }

}
