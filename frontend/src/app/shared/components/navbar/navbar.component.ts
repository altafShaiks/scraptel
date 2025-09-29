import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { RegisterDialogComponent } from '../../../features/auth/components/register/register-dialog.component';
import { LoginDialogComponent } from '../../../features/auth/components/login/login-dialog.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  readonly dialog = inject(MatDialog);
  @Input() isScrolled = false;
  @Output() menuToggled = new EventEmitter<boolean>();

  menuOpened: boolean = false;

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, dialog: string): void {
    this.dialog.open(dialog === 'register' ? RegisterDialogComponent : LoginDialogComponent, {
      panelClass: 'custom-dialog-panel',
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openMenu() {
    this.menuOpened = true;
    this.menuToggled.emit(this.menuOpened);
  }

  closeMenu() {
    this.menuOpened = false;
    this.menuToggled.emit(this.menuOpened);
  }

}
