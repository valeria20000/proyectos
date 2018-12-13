import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inmobiliaria } from '../model/inmobiliaria';

@Injectable({
  providedIn: 'root'
})
export class InmobiliariaService {
  endopoint: string = 'http://localhost:3000/inmobiliarias';

  constructor(public http: HttpClient) { 
    console.log('InmobiliariaService constructor');
  }
  getAll(): Observable<any>{
    console.trace('InmobiliariaService getAll ${this.endopoint}');
    return this.http.get(this.endopoint);

  }
  getById(id: number):  Observable<any>{
  
    let url = this.endopoint + "/" + id;
    return this.http.get(url);
  }
  add(inmobiliaria : Inmobiliaria): Observable <any>{
    let body = {
    "nombre": inmobiliaria.nombre,
    "precio": inmobiliaria.precio,
    "alquiler": inmobiliaria.alquiler,
    "habitaciones": inmobiliaria.habitaciones,
    "foto": inmobiliaria.foto,
    "direccion": inmobiliaria.direccion,
    "servicios": inmobiliaria.servicios,
  };
    const httpOptions = {
      headers: new HttpHeaders({
        'Context-Type': 'application/json'
      })

    };
    return this.http.post(this.endopoint, body , httpOptions);
  }
}
