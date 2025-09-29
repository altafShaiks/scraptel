import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogClose, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-login-dialog',
  imports: [MatButtonModule, MatDialogClose, MatDialogTitle],
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.scss'
})
export class LoginDialogComponent {

}
