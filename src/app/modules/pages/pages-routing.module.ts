import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registrate', component: NuevoUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
