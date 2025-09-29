import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { ScrollService } from '../../shared/services/scroll.service';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-about',
  imports: [NavbarComponent, FooterComponent, MatCardModule, MatChipsModule],
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  isScrolled = false;
  menuIsOpen: boolean = false;

  constructor(private scrollService: ScrollService) {
    scrollService.isScrolled$.subscribe(scrolled => {
      this.isScrolled = scrolled;
    })
  }

  onMenuToggled(isOpen: boolean) {
    this.menuIsOpen = isOpen;
  }
}
