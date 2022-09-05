import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.css']
})
export class LugarComponent implements OnInit {

  ubicacionForm: any

  constructor(private formBuilder: FormBuilder) { 
    this.formInit()
  }

  ngOnInit(): void {
  }

  formInit() {
    this.ubicacionForm = this.formBuilder.group({
      Ubicacion: ['', Validators.minLength(3)]
    })
  }

  blur() {
    console.log("this.ubicacionForm", this.ubicacionForm)
  }


  localizame() {
    console.log("localizame")
    let payload = {
      Pais: 'chile',
      Region: 'Metropolitana',
      Localidad: 'Metropolitana',
      Comuna: 'Maipu',
      Direccion: 'Nueva san martin con las naciones'
    }
  }

  localizaVehiculo() {
    console.log("localiza vehiculo");
    
  }

}
