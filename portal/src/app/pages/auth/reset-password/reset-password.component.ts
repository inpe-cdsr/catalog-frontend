import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from "@angular/router";

// explore state
import { showLoading, closeLoading } from '../../explore/explore.action';

// auth component
import { ErrorInterface } from '../auth.interface';
import { AuthService } from '../auth.service';
import { AuthState } from '../auth.state';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent{

  /** email */
  public email: string;
  /** new_password */
  public new_password: string;
  /** confirm_new_password */
  public confirm_new_password: string;
  /** token */
  public token: string;
  /** infos of the login error, used to display on the window */
  public error: ErrorInterface;
  /** form options */
  public form: FormGroup;

  constructor(
    private as: AuthService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private store: Store<AuthState>
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      new_password: ['', [Validators.required]],
      confirm_new_password: ['', [Validators.required]]
    });

    // get query parameters
    this.token = this.route.snapshot.queryParamMap.get("token")
  }

  /**
   * request login in the system (Oauth Sevrer OBT)
   */
  public async resetPassword() {
    if (this.form.status !== 'VALID') {
      this.error = {
        type: 'error',
        message: 'Fill in all fields!'
      };
      // go out from the method
      return;
    }

    if (this.new_password !== this.confirm_new_password) {
      this.error = {
        type: 'error',
        message: 'Passwords do not match!'
      };
      // go out from the method
      return;
    }

    try {
      this.store.dispatch(showLoading());

      await this.as.resetPassword(
        {
          email: this.email,
          password: this.new_password,
          token: this.token
        }
      );

      this.snackBar.open('Password has been updated! Please, login again.', '', {
        duration: 3000,
        verticalPosition: 'top',
        panelClass: 'app_snack-bar-success'
      });

    } catch (err) {
      this.error = {
        type: 'error',
        message: err.error.message ? err.error.message : 'Error!'
      };
    } finally {
      this.store.dispatch(closeLoading());
    }
  }

}
