import { Component } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthState } from 'src/app/pages/auth/auth.state';
import { Store } from '@ngrx/store';
import { showLoading, closeLoading } from '../../explore/explore.action';
import { AuthService } from '../auth.service';
import { Login } from '../auth.action';

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
  public error: object;

  /** set validators of the form */
  constructor(
    private store: Store<AuthState>,
    private snackBar: MatSnackBar,
    private as: AuthService,
    public dialogRef: MatDialogRef<LoginComponent>,
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
    } else {
      try {
        this.store.dispatch(showLoading());

        const credentials = {
          email: this.email,
          password: this.password
        };
        const response = await this.as.login(credentials);
        this.store.dispatch(Login({
          userId  : response.user_id,
          token : response.access_token,
          fullname : response.fullname,
          email : response.email,
          password : response.password
        }));

        this.snackBar.open('Login Successfully!', '', {
          duration: 2000,
          verticalPosition: 'top',
          panelClass: 'app_snack-bar-success'
        });
        this.dialogRef.close();

      } catch (err) {
        const message = err.error.message ? err.error.message : 'Authentication Error!';
        this.error = {
          type: 'error',
          message
        };

      } finally {
        this.store.dispatch(closeLoading());
      }
    }
  }

  /** close dialog of the window */
  public closeDialog() {
    this.dialogRef.close();
  }

}