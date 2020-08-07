import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

// explore state
import { showLoading, closeLoading } from '../../explore/explore.action';

// auth component
import { AuthService } from '../auth.service';
import { Login } from '../auth.action';
import { AuthState } from '../auth.state';
import { ErrorInterface } from '../auth.interface';

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
  /** form options */
  public formLogin: FormGroup;
  /** infos of the login error, used to display in the window */
  public error: ErrorInterface;

  /** set validators of the form */
  constructor(
    private store: Store<AuthState>,
    private snackBar: MatSnackBar,
    private as: AuthService,
    public dialogRef: MatDialogRef<LoginComponent>,
    public dialog: MatDialog,
    private fb: FormBuilder) {

    this.formLogin = this.fb.group({
      email: ['', [Validators.required]],
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
    console.log('\n openForgotPasswordDialog() ...');
    // this.dialog.open(LoginComponent, {
    //   width: '400px',
    //   restoreFocus: false,
    //   disableClose: true
    // });
  }

  /** close dialog of the window */
  public closeDialog() {
    this.dialogRef.close();
  }
}
