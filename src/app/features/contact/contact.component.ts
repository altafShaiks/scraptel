import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { MatCardModule } from '@angular/material/card';
import { ScrollService } from '../../shared/services/scroll.service';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-contact',
  imports: [NavbarComponent, FooterComponent, MatCardModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
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
