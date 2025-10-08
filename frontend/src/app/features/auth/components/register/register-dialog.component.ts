import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogClose, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { environment } from '../../../../../../src/environments/environment';

@Component({
  selector: 'app-register-dialog',
  imports: [MatButtonModule, MatDialogClose, MatDialogTitle, HttpClientModule, ReactiveFormsModule],
  templateUrl: './register-dialog.component.html',
  styleUrl: './register-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterDialogComponent {
  readonly dialogRef = inject(MatDialogRef<RegisterDialogComponent>);
  form: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    });
  }

  registerUser(): void {
    if (this.form.valid && this.form.value.password === this.form.value.confirmpassword) {
      this.http.post(`${environment.apiUrl}/users/register`, {
        fullname: this.form.value.fullname,
        email: this.form.value.email,
        phone: this.form.value.phone,
        password: this.form.value.password
      }).subscribe({
        next: res => {
          this.dialogRef.close();
        },
        error: err => {
        },
        complete: () => {
        }
      });
    }
  }
}
