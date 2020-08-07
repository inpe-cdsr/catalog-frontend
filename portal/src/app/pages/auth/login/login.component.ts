import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

// explore state
import { showLoading, closeLoading } from '../../explore/explore.action';

// auth component
import { Login } from '../auth.action';
import { ErrorInterface } from '../auth.interface';
import { AuthService } from '../auth.service';
import { AuthState } from '../auth.state';

import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

/**
 * login page component
 */
@Component({
  selector: 'app-dialog-feature',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  /** email */
  public email: string;
  /** password */
  public password: string;
  /** infos of the login error, used to display on the window */
  public error: ErrorInterface;
  /** form options */
  public formLogin: FormGroup;

  /** set validators of the form */
  constructor(
    private as: AuthService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<LoginComponent>,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private store: Store<AuthState>) {

    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  /**
   * request login in the system (Oauth Sevrer OBT)
   */
  public async login() {
    if (this.formLogin.status !== 'VALID') {
      this.error = {
        type: 'error',
        message: 'Fill in all fields!'
      };
      // go out from the method
      return;
    }

    try {
      this.store.dispatch(showLoading());

      const response = await this.as.login(
        {
          email: this.email,
          password: this.password
        }
      );

      this.store.dispatch(Login({
        userId: response.user_id,
        token: response.access_token,
        fullname: response.fullname,
        email: response.email,
        password: response.password
      }));

      this.snackBar.open('Login Successfully!', '', {
        duration: 3000,
        verticalPosition: 'top',
        panelClass: 'app_snack-bar-success'
      });

      this.dialogRef.close();

    } catch (err) {
      this.error = {
        type: 'error',
        message: err.error.message ? err.error.message : 'Authentication Error!'
      };
    } finally {
      this.store.dispatch(closeLoading());
    }
  }

  /**
   * Open Forgot Password Dialog
   */
  openForgotPasswordDialog() {
    // close login dialog
    this.closeDialog();

    // open forgot password dialog
    this.dialog.open(ForgotPasswordComponent, {
      width: '400px',
      restoreFocus: false,
      disableClose: true
    });
  }

  /** close dialog of the window */
  public closeDialog() {
    this.dialogRef.close();
  }
}
