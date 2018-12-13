import { Component, OnInit } from '@angular/core';
import { Inmobiliaria } from 'src/app/model/inmobiliaria';
import { InmobiliariaService } from 'src/app/providers/inmobiliaria.service';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/providers/login.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  inmobiliarias: Inmobiliaria[];
  i1: Inmobiliaria;
  
  constructor(private loginService: LoginService, public imobiliariaService: InmobiliariaService, public route: ActivatedRoute) { 
    this.inmobiliarias = [];
    this.i1 = new Inmobiliaria();
   
  }

 
  ngOnInit() {
    this.recargarLista();
  }

  recargarLista(){

    this.imobiliariaService.getAll().subscribe(data =>{
      this.inmobiliarias = data.map( el => el);
      console.log(this.inmobiliarias);
      this.i1 = this.inmobiliarias[0];
    });
    
  }

  seleccionar(inmobiliaria: Inmobiliaria) {
    console.trace("ComparadorComponent seleccionar %o", inmobiliaria);

    this.i1 = inmobiliaria;
  }

  logueado() {
    if (this.loginService.isLogged()) {
      return true
    } else { return false }
  }

}
