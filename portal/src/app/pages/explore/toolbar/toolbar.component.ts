import { Component, EventEmitter, Output } from '@angular/core';
import { LoginComponent } from '../../auth/login/login.component';
import { MatDialog } from '@angular/material';

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

  constructor(public dialog: MatDialog){}

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

}
