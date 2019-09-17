import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  { path: '', redirectTo: '/admin/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent }
];

/**
 * Admin Route Module
 * redirects to administrator dashboard components with 'admin' before URL
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
