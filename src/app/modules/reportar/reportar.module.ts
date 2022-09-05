import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportarVehiculoComponent } from './components/reportar-vehiculo/reportar-vehiculo.component';
import { ReportarRoutingModule } from './reportar-routing.module';
import { ReportarPersonaComponent } from './components/reportar-persona/reportar-persona.component';
import { MaterialModule } from '../material/material.module';
import { LugarComponent } from './components/lugar/lugar.component';



@NgModule({
  declarations: [
    ReportarVehiculoComponent,
    ReportarPersonaComponent,
    LugarComponent
  ],
  imports: [
    CommonModule,
    ReportarRoutingModule,
    MaterialModule
  ]
})
export class ReportarModule { }
