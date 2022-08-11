import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';
import { UsuarioLogin } from '../models/usuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private urlBase:string = "https://localhost:7163/"

  constructor( private http: HttpClient ) { }

  login(user: UsuarioLogin ) {
    let url = `${this.urlBase}api/login`
    return this.http.post(url, {user})
  }

  registrate(persona: Persona ) {
    let url = `${this.urlBase}api/registrate`
    return this.http.post(url, persona)
  }
}
