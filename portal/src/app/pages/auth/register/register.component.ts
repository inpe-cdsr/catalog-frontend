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
import { companyActivities, companyTypes } from 'src/app/shared/helpers/CONST';

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
  public listActivities = [];

  /** set validators of the form */
  constructor(
    private store: Store<AuthState>,
    private snackBar: MatSnackBar,
    private vs: ViaCEPServie,
    private as: AuthService,
    public dialogRef: MatDialogRef<RegisterComponent>,
    private fb: FormBuilder) {

    this.listTypes = companyTypes;
    this.listActivities = companyActivities;
    this.user = {
      username: '',
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      cep: '',
      street: '',
      number: '',
      district: '',
      city: '',
      state: '',
      country: '',
      complement: '',
      company_name: '',
      company_type: '',
      company_activity: ''
    }

    this.formRegister = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      cep: [''],
      street: [{disabled: true, value: ''}],
      number: ['', [Validators.maxLength(9)]],
      complement: ['', [Validators.maxLength(60)]],
      city: [{disabled: true, value: ''}],
      district: [{disabled: true, value: ''}],
      state: [{disabled: true, value: ''}, [Validators.maxLength(2)]],
      country: [{disabled: true, value: ''}],
      company_name: ['', [Validators.required]],
      company_type: ['', [Validators.required]],
      company_activity: ['', [Validators.required]],
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

      if (controls['username'].hasError('minlength')) {
        this.error = {
          type: 'error',
          message: 'Username can be min 6 characters long!'
        };
        return true;
      }

      if (controls['name'].hasError('minlength')) {
        this.error = {
          type: 'error',
          message: 'Username can be min 10 characters long!'
        };
        return true;
      }

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
        username: this.user.username,
        name: this.user.name,
        email: this.user.email,
        password: this.user.password,
        phone: this.user.phone,
        address: {
          cep: this.user.cep,
          street: this.user.street,
          number: this.user.number,
          district: this.user.district,
          city: this.user.city,
          state: this.user.state,
          country: this.user.country,
          complement: this.user.complement
        },
        company_name: this.user.company_name,
        company_type: this.user.company_type,
        company_activity: this.user.company_activity
      }

      const responseUser = await this.as.addUser(user);

      // login
      const response = await this.as.login({
        email: this.user.email,
        password: this.user.password
      });

      this.store.dispatch(Login({
        username: response.username,
        token: response.access_token,
        name: response.name,
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

  private async disableControls(){
    // disable control, if it is enabled
    this.formRegister.controls['street'].disable()
    this.formRegister.controls['district'].disable()
  }

  private async clearUserInformation(){
    this.user.street = '';
    this.user.district = '';
    this.user.city = '';
    this.user.state = '';
    this.user.country = '';
    this.disableControls()
  }

  public async getAddress() {
    this.disableControls()

    const cep = this.user.cep;

    if (cep && (cep.length === 8 || cep.length === 9)) {
      try {
        const response = await this.vs.getAddress(cep.replace('-', ''));

        // console.log('response: ',response)

        if (response.erro) {
          this.clearUserInformation()
          return
        }

        if (response.localidade) {
          this.user.cep = response.cep
          this.user.district = response.bairro
          this.user.city = response.localidade
          this.user.state = response.uf
          this.user.country = 'Brazil'

          // there are cities that do not have CEP by streets, like Cachoeira Paulista,
          // because of that, if the response contains street, it is added automatically [...]
          if (response.logradouro) {
            // disable the control, if it is enabled
            this.user.street = response.logradouro
            return
          }

          // [...] else, the street input is cleared and enabled in order to
          // the user adds his street manually
          this.user.street = ''
          this.user.district = ''
          this.formRegister.controls['street'].enable()
          this.formRegister.controls['district'].enable()
        }
      } catch(err) {
        this.clearUserInformation()
        return
      }
    }
  }

  /** close dialog of the window */
  public closeDialog() {
    this.dialogRef.close();
  }
}
