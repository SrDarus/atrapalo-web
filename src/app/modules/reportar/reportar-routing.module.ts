import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportarVehiculoComponent } from './components/reportar-vehiculo/reportar-vehiculo.component';
import { ReportarPersonaComponent } from './components/reportar-persona/reportar-persona.component';
import { LugarComponent } from './components/lugar/lugar.component';

const routes: Routes = [
  { path: 'vehiculo', component: ReportarVehiculoComponent },
  { path: 'persona', component: ReportarPersonaComponent },
  { path: 'lugar', component: LugarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportarRoutingModule { }
