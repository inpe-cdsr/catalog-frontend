import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { Store } from '@ngrx/store';

// explore state
import { showLoading, closeLoading } from '../../explore/explore.action';

// auth component
import { ErrorInterface } from '../auth.interface';
import { AuthService } from '../auth.service';
import { AuthState } from '../auth.state';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

  /** email */
  public email: string;
  /** infos of the login error, used to display on the window */
  public error: ErrorInterface;
  /** form options */
  public formForgotPassword: FormGroup;

  constructor(
    private as: AuthService,
    public dialogRef: MatDialogRef<ForgotPasswordComponent>,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private store: Store<AuthState>
  ) {
    this.formForgotPassword = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  /**
   * request login in the system (Oauth Sevrer OBT)
   */
  public async sendNewCredentials() {
    if (this.formForgotPassword.status !== 'VALID') {
      this.error = {
        type: 'error',
        message: 'Fill in all fields!'
      };
      // go out from the method
      return;
    }

    try {
      this.store.dispatch(showLoading());

      await this.as.forgotPassword(this.email);

      this.snackBar.open('E-mail has been sent! Please, check your e-mail account.', '', {
        duration: 3000,
        verticalPosition: 'top',
        panelClass: 'app_snack-bar-success'
      });

      this.closeDialog();

    } catch (err) {
      this.error = {
        type: 'error',
        message: err.error.message ? err.error.message : 'Error!'
      };
    } finally {
      this.store.dispatch(closeLoading());
    }
  }

  /** close dialog of the window */
  public closeDialog() {
    this.dialogRef.close();
  }

}
