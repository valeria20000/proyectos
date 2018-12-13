import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Inmobiliaria } from 'src/app/model/inmobiliaria';
import { InmobiliariaService } from 'src/app/providers/inmobiliaria.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  formulario: FormGroup;
  inmobiliaria: Inmobiliaria = new Inmobiliaria();
  servicio: FormArray;
  mensaje: string;


  constructor(private inmobiliariaService: InmobiliariaService, private route: ActivatedRoute) {

    this.inmobiliaria.id = 0;
    this.resetForm();
   }

   resetForm(){
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      precio: new FormControl('', [Validators.required, Validators.min(2), Validators.max(100)]),
      habitaciones: new FormControl('', [Validators.required, Validators.min(2), Validators.max(100)]),
      edad: new FormControl('', [Validators.required, Validators.min(1), Validators.max(999)]),
      alquiler: new FormControl(false),
      foto: new FormControl('https://picsum.photos/300/300/?random', [Validators.required, Validators.pattern('^(http(s?):\/\/).+(\.(png|jpg|jpeg))$')]),
      direccion: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      servicio: new FormArray([], Validators.minLength(1))
     
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.inmobiliaria.id = +params['id'];
      if (this.inmobiliaria.id > 0) {
        this.detalleFruta(this.inmobiliaria.id);

      }
    });
  }

  detalleFruta(id) {
    this.inmobiliariaService.getById(id).subscribe(data => {
      this.inmobiliaria = data;
      this.cargarFormulario(this.inmobiliaria);

    });

  }


  cargarFormulario(inmobiliaria: Inmobiliaria) {
    console.trace('FormularioComponent cargarFormulario');
    this.formulario.controls.nombre.setValue(inmobiliaria.nombre);
    this.formulario.controls.precio.setValue(inmobiliaria.precio);
    this.formulario.controls.alquiler.setValue(inmobiliaria.alquiler);
    this.formulario.controls.habitaciones.setValue(inmobiliaria.habitaciones);
    this.formulario.controls.foto.setValue(inmobiliaria.foto);
    this.formulario.controls.direccion.setValue(inmobiliaria.direccion);
    this.formulario.controls.servicios.setValue(inmobiliaria.servicios);

    const arrayCasas = new FormArray([]) as FormArray;

    this.inmobiliaria.servicios.forEach(c => {
      arrayCasas.push(new FormGroup({servicios: new FormControl(c,[Validators.required,Validators.minLength(2),Validators.maxLength(15)])}));
    });

    this.formulario.setControl('color' , arrayCasas);

}

crear() {
  let inmobiliaria = new Inmobiliaria();
  inmobiliaria.nombre =  this.formulario.controls.nombre.value;
  inmobiliaria.precio = this.formulario.controls.precio.value;
  inmobiliaria.alquiler = this.formulario.controls.alquiler.value; 
  inmobiliaria.habitaciones = this.formulario.controls.habitaciones.value; 
  inmobiliaria.foto = this.formulario.controls.foto.value; 
  inmobiliaria.direccion = this.formulario.controls.direccion.value; 
  
  //Si la oferta esta activa aplicamos el descuento caso contrario no 
 

  const arrayCasas = this.formulario.get('servicio') as FormArray;

  arrayCasas.controls.forEach(servicio => {
    const servicioFormControl = this.servicio.value.servicios;
    inmobiliaria.servicios.push(servicioFormControl);
  });

  this.inmobiliariaService.add(inmobiliaria).subscribe(data => {
    this.mensaje = "Creado correctamente";
    this.resetForm();
  });

}

  
}
