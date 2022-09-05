import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ContainerComponent } from './components/container/container.component';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    ContainerComponent,
    NuevoUsuarioComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    CoreModule,
    MatSidenavModule  
  ],
  exports: [
    HeaderComponent,
    ContainerComponent,
    // MatSidenavModule
  ]
})
export class PagesModule { }
