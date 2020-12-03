import { Component } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
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
      complement: '',
      city: '',
      state: '',
      country: '',
      company: '',
      companyType: '',
      sector: ''
    }

    this.formRegister = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      ddd: [''],
      phone: [''],
      cep: [''],
      street: [{disabled: true, value: ''}],
      number: ['', [Validators.maxLength(9)]],
      complement: ['', [Validators.maxLength(60)]],
      city: [{disabled: true, value: ''}],
      state: [{disabled: true, value: ''}, [Validators.maxLength(2)]],
      country: [{disabled: true, value: ''}],
      company: ['', [Validators.required]],
      companyType: ['', [Validators.required]],
      sector: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  private getFormValidationErrors(){
    // Source: https://stackoverflow.com/a/44280487

    let errors = [];

    Object.keys(this.formRegister.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.formRegister.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          errors.push({
            'field': key,
            'error': keyError,
            'error_value': controlErrors[keyError]
          });
        });
      }
    });

    return errors;
  }

  private doesRegisterFormHaveValidationError() {
    if (this.formRegister.status !== 'VALID') {
      let controls = this.formRegister.controls;

      if (controls['email'].hasError('email')) {
        this.error = {
          type: 'error',
          message: 'Invalid e-mail!'
        };
        return true;
      }

      if (controls['state'].hasError('maxlength')) {
        this.error = {
          type: 'error',
          message: 'State can be max 2 characters long!'
        };
        return true;
      }

      for (let key of Object.keys(controls)) {
        if (controls[key].hasError('required')) {
          this.error = {
            type: 'error',
            message: 'Field `' + key + '` is required!'
          };
          return true;
        }
      }

      // generic error
      let errors = this.getFormValidationErrors();

      this.error = {
        type: 'error',
        message: JSON.stringify(errors)
      };
      return true;
    }

    return false;
  }

  public async register() {
    if (this.doesRegisterFormHaveValidationError()) {
      // if there is some error on the register form,
      // then go out from the method and the error message is showed
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
          complement: this.user.complement,
          city: this.user.city,
          state: this.user.state,
          country: this.user.country
        },
        company: this.user.company,
        companyType: this.user.companyType,
        activity: this.user.sector
      }

      const responseUser = await this.as.addUser(user);

      // login
      const response = await this.as.login({
        email: this.user.email,
        password: this.user.password
      });

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
          this.user.cep = response.cep;
          this.user.street = response.logradouro;
          this.user.city = response.localidade;
          this.user.state = response.uf;
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
