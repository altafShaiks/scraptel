import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-register-dialog',
  imports: [MatButtonModule, MatDialogClose, MatDialogTitle],
  templateUrl: './register-dialog.component.html',
  styleUrl: './register-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterDialogComponent {
  readonly dialogRef = inject(MatDialogRef<RegisterDialogComponent>);
}
