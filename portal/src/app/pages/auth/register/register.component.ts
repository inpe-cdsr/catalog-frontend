import { Component } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

// explore state
import { showLoading, closeLoading } from '../../explore/explore.action';

// auth component
import { AuthState } from 'src/app/pages/auth/auth.state';
import { Login } from '../auth.action';
import { AuthService } from '../auth.service';
import { UserInterface, ErrorInterface } from '../auth.interface';

// other
import { sectors, orgTypes } from 'src/app/shared/helpers/CONST';

// register component
import { ViaCEPServie } from './viacep.service';


/**
 * login page component
 */
@Component({
  selector: 'app-dialog-feature',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public formRegister: FormGroup;
  /** login error information that is used to display on the screen */
  public error: ErrorInterface;
  public user: UserInterface;
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
    this.user = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      ddd: '',
      phone: '',
      cep: '',
      street: '',
      number: '',
      city: '',
      uf: '',
      country: '',
      company: '',
      companyType: '',
      sector: ''
    }

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
      // go out from the method
      return;
    }

    try {
      this.store.dispatch(showLoading());

      if (this.user.password !== this.user.confirmPassword) {
        this.error = {
          type: 'error',
          message: 'Password and password confirmation must match'
        };
        // go out from the method
        return;
      }

      const user = {
        fullname: this.user.name,
        email: this.user.email,
        password: this.user.password,
        areaCode: this.user.ddd,
        phone: this.user.phone,
        address: {
          cep: this.user.cep,
          street: this.user.street,
          number: this.user.number,
          city: this.user.city,
          state: this.user.uf,
          country: this.user.country
        },
        company: this.user.company,
        companyType: this.user.companyType,
        activity: this.user.sector
      }

      const responseUser = await this.as.addUser(user);

      // login
      const response = await this.as.login(
        {
          email: this.user.email,
          password: this.user.password
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
        message: err.error.message ? JSON.stringify(err.error.message) : 'Error in Register!'
      };

    } finally {
      this.store.dispatch(closeLoading());
    }
  }

  public async getAddress() {
    const cep = this.user.cep;

    if (cep && (cep.length === 8 || cep.length === 9)) {
      try {
        const response = await this.vs.getAddress(cep.replace('-', ''));
        if (response.logradouro) {
          this.user.street = response.logradouro;
          this.user.city = response.localidade;
          this.user.uf = response.uf;
          this.user.country = 'Brazil';
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
