import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ContainerComponent } from './components/container/container.component';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    ContainerComponent,
    NuevoUsuarioComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    CoreModule,
  ],
  exports: [
    HeaderComponent,
    ContainerComponent

  ]
})
export class PagesModule { }
