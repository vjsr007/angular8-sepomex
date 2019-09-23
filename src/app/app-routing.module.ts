import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/index.component';
import { NonfoundComponent } from './views/nonfound/nonfound.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'nonfound', component: NonfoundComponent },
  { path: '**', redirectTo: 'nonfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
