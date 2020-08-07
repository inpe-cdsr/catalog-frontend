import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { ExploreComponent } from './pages/explore/explore.component';
import { ResetPasswordComponent } from './pages/auth/reset-password/reset-password.component';

const routes: Routes = [
  { path: '', redirectTo: '/explore', pathMatch: 'full' },
  { path: 'explore', component: ExploreComponent },
  { path: 'auth/reset-password', component: ResetPasswordComponent },
  // { path: 'admin', loadChildren: './pages/admin/admin.module#AdminModule'}
];

/**
 * External Route Module (main)
 * has call to the explorer, authentication and administrator modules
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
