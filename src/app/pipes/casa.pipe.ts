import { Pipe, PipeTransform } from '@angular/core';
import { Inmobiliaria } from '../model/inmobiliaria';

@Pipe({
  name: 'filterAlquiler'
})
export class CasaPipe implements PipeTransform {

  transform(inmobiliarias: Array<Inmobiliaria>, alquiler: boolean): Array<Inmobiliaria> {
    if(alquiler){
      return inmobiliarias.filter(inmobiliaria => inmobiliaria.alquiler);
    }else{
      return inmobiliarias;
    }
  }

}
