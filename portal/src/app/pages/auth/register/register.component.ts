import { Component } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthState } from 'src/app/pages/auth/auth.state';
import { Store } from '@ngrx/store';
import { showLoading, closeLoading } from '../../explore/explore.action';
import { ViaCEPServie } from './viacep.service';
import { sectors, orgTypes } from 'src/app/shared/helpers/CONST';
import { Login } from '../auth.action';
import { AuthService } from '../auth.service';

/**
 * login page component
 */
@Component({
  selector: 'app-dialog-feature',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  /** form options */
  public formRegister: FormGroup;
  /** infos of the login error, used to display in the window */
  public error: object;
  public user = {};
  public listTypes = [];
  public listSectors = [];

  /** set validators of the form */
  constructor(
    private store: Store<AuthState>,
    private snackBar: MatSnackBar,
    private vs: ViaCEPServie,
    private as: AuthService,
    public dialogRef: MatDialogRef<RegisterComponent>,
    private fb: FormBuilder) {

    this.listTypes = orgTypes;
    this.listSectors = sectors;

    this.formRegister = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      ddd: [''],
      phone: [''],
      cep: [''],
      street: [''],
      number: [''],
      city: [''],
      uf: [''],
      country: [''],
      company: ['', [Validators.required]],
      companyType: ['', [Validators.required]],
      sector: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  public async register() {
    if (this.formRegister.status !== 'VALID') {
      this.error = {
        type: 'error',
        message: 'Fill in all fields!'
      };
    } else {
      try {
        this.store.dispatch(showLoading());

        if (this.user['password'] !== this.user['confirmPassword']) {
          this.error = {
            type: 'error',
            message: 'Password and password confirmation must match'
          };

        } else {
          const user = {
            email: this.user['email'],
            password: this.user['password'],
            fullname: this.user['name'],
            address: {
              cep: this.user['cep'],
              street: this.user['street'],
              number: this.user['number'],
              city: this.user['city'],
              state: this.user['uf'],
              country: this.user['country']
            },
            activity: this.user['sector'],
            company: this.user['company'],
            companyType: this.user['companyType'],
            areaCode: this.user['ddd'],
            phone: this.user['phone']
          }
          const responseUser = await this.as.addUser(user);

          // LOGIN
          const credentials = {
            email: this.user['email'],
            password: this.user['password']
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
        }

      } catch (err) {
        const message = err.error.message ? err.error.message : 'Error in Register!';
        this.error = {
          type: 'error',
          message
        };

      } finally {
        this.store.dispatch(closeLoading());
      }
    }
  }

  public async getAddress() {
    const cep = this.user['cep'];
    if (cep && (cep.length === 8 || cep.length === 9)) {
      try {
        const response = await this.vs.getAddress(cep.replace('-', ''));
        if (response.logradouro) {
          this.user['street'] = response.logradouro;
          this.user['city'] = response.localidade;
          this.user['uf'] = response.uf;
          this.user['country'] = 'Brazil';
        }

      } catch(err) {
        return
      }
    }
  }

  /** close dialog of the window */
  public closeDialog() {
    this.dialogRef.close();
  }

}
