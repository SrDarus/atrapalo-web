import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../models/persona.model';
import { UsuarioLogin } from '../models/usuarioLogin.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private urlBase:string = "https://localhost:7163/api/"

  constructor( private http: HttpClient ) { }

  login(user: UsuarioLogin ) {
    let url = `${this.urlBase}login/login`
    return this.http.post(url, user)
  }

  registrate(persona: Persona ) {
    let url = `${this.urlBase}persona`

  //   const headers= new HttpHeaders()
  // .set('content-type', 'application/json')
  // .set('Access-Control-Allow-Origin', '*');

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');

    return this.http.post(url, persona, {headers})
  }
}
