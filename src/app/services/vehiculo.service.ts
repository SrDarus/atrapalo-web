import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehiculo } from '../models/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculloService {

  private urlBase:string = "https://localhost:7163/api/"

  constructor( private http: HttpClient ) { }



  guardarVehiculo(veh: Vehiculo ) {
    let url = `${this.urlBase}persona`

  //   const headers= new HttpHeaders()
  // .set('content-type', 'application/json')
  // .set('Access-Control-Allow-Origin', '*');

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');

    return this.http.post(url, veh, {headers})
  }
}
