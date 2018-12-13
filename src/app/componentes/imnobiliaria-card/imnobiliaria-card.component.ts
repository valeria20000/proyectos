import { Component, OnInit, Input } from '@angular/core';
import { Inmobiliaria } from 'src/app/model/inmobiliaria';


@Component({
  selector: 'app-imnobiliaria-card',
  templateUrl: './imnobiliaria-card.component.html',
  styleUrls: ['./imnobiliaria-card.component.css']
})
export class ImnobiliariaCardComponent implements OnInit {
  _inmobiliaria: Inmobiliaria;

  
  @Input("_imobiliaria")
  set inmobiliaria(value: Inmobiliaria) {
    if (value) {
      this._inmobiliaria = value;
    } else {
      console.debug("inmobiliaria undefined => new Inmobiliaria()");
      this._inmobiliaria = new Inmobiliaria();
    }
  }
  get inmobiliaria(): Inmobiliaria{
    return this._inmobiliaria;
  }

 
  

  constructor() { }

  ngOnInit() {
  }

}
