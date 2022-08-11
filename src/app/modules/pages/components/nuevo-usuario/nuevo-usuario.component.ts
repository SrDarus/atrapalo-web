import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from '../../../../services/persona.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  formRegistro: any
  constructor(private builder: FormBuilder,
    private _personaService: PersonaService) { 
    this.formInit()
  }

  ngOnInit(): void {
  }

  registrar() {
    
    
    let usuario = this.getPayload()

    this._personaService.registrate(usuario).subscribe( (response)=> {
      console.log("response", response)
    })
    console.log("usuario", this.formRegistro.value)
  } 
  

  formInit() {
    this.formRegistro = this.builder.group({
      Rut: [''],
      Dv: [''],
      Nombres: [''],
      Apellidos: [''],
      Correo: [''],
      Password: ['']
    })
  }
  
// console.log(a.split("")[a.length - 1]);

  getPayload():Persona {
    let persona =  {
      Rut: this.getControl('Rut').value,
      Dv: this.getControl('Dv').value.split('')[this.getControl('Dv').value.length -1],
      Nombres: this.getControl('Nombres').value,
      Apellidos: this.getControl('Apellidos').value,
      Correo: this.getControl('Correo').value,
      Password: this.getControl('Password').value
    } as Persona
    return persona
  }

  getControl(ctrlName: string): AbstractControl {
    return this.formRegistro.controls[ctrlName];
  }

}
