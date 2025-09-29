import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { ScrollService } from '../../shared/services/scroll.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, MatCardModule, MatChipsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isScrolled = false;
  menuIsOpen: boolean = false;

  constructor(private scrollService: ScrollService) {
    scrollService.isScrolled$.subscribe(scrolled => {
      this.isScrolled = scrolled;
    });
  }

  onMenuToggled(isOpen: boolean) {
    this.menuIsOpen = isOpen;
  }
}
