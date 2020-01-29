import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HorsesComponent } from './components/horses/horses.component';


const routes: Routes = [{ path: '', component: LoginComponent }, { path: 'horses', component: HorsesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
