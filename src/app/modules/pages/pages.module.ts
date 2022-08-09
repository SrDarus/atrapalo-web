import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ContainerComponent } from './components/container/container.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    ContainerComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [
    HeaderComponent,

  ]
})
export class PagesModule { }
