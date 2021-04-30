import { Component, EventEmitter, Output } from '@angular/core';
import { LoginComponent } from '../../auth/login/login.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { RegisterComponent } from '../../auth/register/register.component';
import { Store, select } from '@ngrx/store';
import { AuthState } from '../../auth/auth.state';
import { Logout } from '../../auth/auth.action';

/**
 * Toolbar component
 * top menu of the explore page
 */
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  /** if is logged */
  public logged = false;

  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private store: Store<AuthState>){
    this.store.pipe(select('auth')).subscribe(res => {
      this.logged = res.username && res.token && res.name;
    });
  }

  /** pointer to issue event to explore component */
  @Output() toggleToEmit = new EventEmitter();

  /** emit event to explore when click in menu icon */
  toggleDrawer() {
    this.toggleToEmit.emit();
  }

  /**
   * Open Login Dialog
   */
  openLogin() {
    this.dialog.open(LoginComponent, {
      width: '400px',
      restoreFocus: false,
      disableClose: true
    });
  }

  /**
   * Open Register Dialog
   */
  openRegister() {
    this.dialog.open(RegisterComponent, {
      width: '700px',
      maxHeight: '85vh',
      restoreFocus: false,
      disableClose: true
    });
  }

  /**
   * Logout in application
   */
  logout() {
    this.logged = false;
    this.store.dispatch(Logout());
    this.snackBar.open('Logout Successfully!', '', {
      duration: 2000,
      verticalPosition: 'top',
      panelClass: 'app_snack-bar-success'
    });
  }

}
