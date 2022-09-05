import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportar-vehiculo',
  templateUrl: './reportar-vehiculo.component.html',
  styleUrls: ['./reportar-vehiculo.component.css']
})
export class ReportarVehiculoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  reportarRobo() {
    this.router.navigate(['reportar/lugar'])
  }

}
