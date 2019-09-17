import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users/users.component';
import { AdminRoutingModule } from './admin-routing.module';

/**
 * Admin Module
 * Module for managing components and service of administrator dashboard pages
 */
@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
