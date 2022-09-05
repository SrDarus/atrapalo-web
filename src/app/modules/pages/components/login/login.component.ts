import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';
import { UsuarioLogin } from '../../../../models/usuarioLogin.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private builder: FormBuilder,
    private _personaService: PersonaService,
    private router: Router) {
    this.formInit()
  }

  ngOnInit(): void {
  }

  login() {
    let payload = this.getPayload()
    this._personaService.login(payload).subscribe(response => {
      console.log("response", response)
      if (response) {

        this.router.navigate(['home']);
      }
    })


  }
  getPayload() {
    console.log("this.formLogin", this.formLogin)
    return {
      Correo: this.formLogin.controls['Correo'].value,
      Password: this.formLogin.controls['Password'].value,
    } as UsuarioLogin
  }



  formLogin: any

  formInit() {
    this.formLogin = this.builder.group({
      Correo: [''],
      Password: ['']
    })
  }

}
